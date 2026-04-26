import { motion } from 'framer-motion';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  highlightWords?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  animate?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  highlightWords,
  subtitle,
  align = 'center',
  animate = true,
}: SectionTitleProps) {
  const words = title.split(' ');
  const highlightSet = new Set(highlightWords?.toLowerCase().split(' ') || []);

  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate
    ? {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-100px' },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
      }
    : {};

  return (
    <Wrapper className={`${align === 'center' ? 'text-center' : 'text-left'} mb-12 md:mb-16`} {...wrapperProps}>
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="w-10 h-px bg-gold-deep" />
          <span className="font-label font-medium text-xs tracking-[0.12em] uppercase text-gold-deep">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-text-primary">
        {words.map((word, i) => (
          <span
            key={i}
            className={
              highlightSet.has(word.toLowerCase().replace(/[^a-z]/g, ''))
                ? 'text-gold-deep italic'
                : ''
            }
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p className="mt-4 font-body font-light text-base md:text-lg leading-relaxed text-text-secondary max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </Wrapper>
  );
}
