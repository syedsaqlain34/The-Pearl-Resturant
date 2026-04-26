import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  hover?: boolean;
  glow?: boolean;
  dark?: boolean;
  className?: string;
}

export default function GlassCard({
  children,
  hover = true,
  glow = false,
  dark = false,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-400',
        dark
          ? 'bg-glass-dark backdrop-blur-md border border-border-gold'
          : 'bg-glass-bg backdrop-blur-md border border-border-light',
        hover && 'transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[rgba(184,133,58,0.06)] hover:border-border-gold ',
        glow && '',
        className
      )}
    >
      {children}
    </div>
  );
}
