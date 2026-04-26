import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Petal({ 
  position, 
  rotation, 
  scale, 
  tier,
  bloomProgress 
}: { 
  position: [number, number, number]; 
  rotation: [number, number, number]; 
  scale: number; 
  tier: number;
  bloomProgress: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.bezierCurveTo(0.3, 0.2, 0.5, 0.8, 0, 1.5);
    shape.bezierCurveTo(-0.5, 0.8, -0.3, 0.2, 0, 0);
    
    const geom = new THREE.ExtrudeGeometry(shape, {
      depth: 0.05,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 3,
    });
    geom.center();
    return geom;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const t = state.clock.elapsedTime;
    const bloomDelay = tier * 0.3;
    const localBloom = Math.max(0, Math.min(1, (bloomProgress - bloomDelay) / 0.5));
    
    const bloomScale = 0.3 + localBloom * 0.7;
    const bloomAngle = -Math.PI / 3 + localBloom * Math.PI / 3;
    
    meshRef.current.scale.setScalar(scale * bloomScale);
    meshRef.current.rotation.x = rotation[0] + bloomAngle;
    meshRef.current.rotation.y = rotation[1];
    meshRef.current.rotation.z = rotation[2];
    
    const breath = 1 + Math.sin(t * 0.8 + tier) * 0.02;
    meshRef.current.scale.multiplyScalar(breath);
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      geometry={geometry}
      castShadow
    >
      <meshStandardMaterial
        color="#C8922A"
        emissive="#C8922A"
        emissiveIntensity={0.3}
        metalness={0.3}
        roughness={0.4}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function LotusCenter() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;
    meshRef.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.05);
  });

  return (
    <mesh ref={meshRef} position={[0, 0.3, 0]}>
      <sphereGeometry args={[0.25, 32, 32]} />
      <meshStandardMaterial
        color="#E8B854"
        emissive="#E8B854"
        emissiveIntensity={0.6}
        metalness={0.2}
        roughness={0.3}
      />
    </mesh>
  );
}

function LotusFlower({ bloomProgress }: { bloomProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    
    groupRef.current.rotation.y += 0.003;
    
    const targetX = mouseRef.current.y * 0.15;
    const targetY = mouseRef.current.x * 0.2;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.z += (-targetY - groupRef.current.rotation.z) * 0.05;
    
    const breath = 1 + Math.sin(t * 0.5) * 0.015;
    groupRef.current.scale.setScalar(breath);
  });

  const innerPetals = useMemo(() => {
    const petals = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      petals.push({
        position: [Math.cos(angle) * 0.3, 0, Math.sin(angle) * 0.3] as [number, number, number],
        rotation: [Math.PI / 6, angle, 0] as [number, number, number],
        scale: 0.7,
      });
    }
    return petals;
  }, []);

  const middlePetals = useMemo(() => {
    const petals = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + Math.PI / 8;
      petals.push({
        position: [Math.cos(angle) * 0.5, -0.1, Math.sin(angle) * 0.5] as [number, number, number],
        rotation: [Math.PI / 5, angle, 0] as [number, number, number],
        scale: 0.9,
      });
    }
    return petals;
  }, []);

  const outerPetals = useMemo(() => {
    const petals = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      petals.push({
        position: [Math.cos(angle) * 0.7, -0.2, Math.sin(angle) * 0.7] as [number, number, number],
        rotation: [Math.PI / 4, angle, 0] as [number, number, number],
        scale: 1.1,
      });
    }
    return petals;
  }, []);

  return (
    <group ref={groupRef}>
      <LotusCenter />
      {innerPetals.map((p, i) => (
        <Petal key={`inner-${i}`} {...p} tier={0} bloomProgress={bloomProgress} />
      ))}
      {middlePetals.map((p, i) => (
        <Petal key={`middle-${i}`} {...p} tier={1} bloomProgress={bloomProgress} />
      ))}
      {outerPetals.map((p, i) => (
        <Petal key={`outer-${i}`} {...p} tier={2} bloomProgress={bloomProgress} />
      ))}
    </group>
  );
}

function SpiceParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 600;
  
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    
    const palette = [
      new THREE.Color('#C8922A'),
      new THREE.Color('#E8B854'),
      new THREE.Color('#FAF4E8'),
    ];
    
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
      
      const color = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.elapsedTime;
    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3 + 1] += 0.001 + Math.random() * 0.002;
      
      if (posArray[i * 3 + 1] > 3) {
        posArray[i * 3 + 1] = -3;
        posArray[i * 3] = (Math.random() - 0.5) * 8;
        posArray[i * 3 + 2] = (Math.random() - 0.5) * 4;
      }
      
      posArray[i * 3] += Math.sin(t * 0.5 + i) * 0.0005;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  const positionAttr = useMemo(() => new THREE.BufferAttribute(positions, 3), [positions]);
  const colorAttr = useMemo(() => new THREE.BufferAttribute(colors, 3), [colors]);

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <primitive object={positionAttr} attach="attributes-position" />
        <primitive object={colorAttr} attach="attributes-color" />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  const [bloomProgress, setBloomProgress] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationId: number;
    
    const animate = (time: number) => {
      if (!startTime) startTime = time;
      const elapsed = (time - startTime) / 1000;
      const progress = Math.min(1, elapsed / 2);
      setBloomProgress(progress);
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };
    
    const timeout = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 500);
    
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <ambientLight color="#C8922A" intensity={0.3} />
      <pointLight position={[0, 3, 0]} color="#FF6B2C" intensity={1.5} />
      <pointLight position={[0, -1, 2]} color="#6B5B95" intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#E8B854" />
      
      <LotusFlower bloomProgress={bloomProgress} />
      <SpiceParticles />
    </>
  );
}

export default function LotusScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 1, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
