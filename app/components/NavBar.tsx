'use client';

import { HomeIcon, GitHubLogoIcon, LinkedInLogoIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { memo, useRef, type CSSProperties, type ReactNode, type RefObject } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

type NavBarProps = {
  className?: string;
  style?: CSSProperties;
};

type NavItemProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  label: string;
  mouseX: MotionValue<number>;
  external?: boolean;
};

function NavItem({ children, href, onClick, label, mouseX, external }: NavItemProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const paddingSync = useTransform(distance, [-150, 0, 150], [8, 16, 8]);
  const paddingX = useSpring(paddingSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const backgroundOpacitySync = useTransform(
    distance,
    [-150, -75, 0, 75, 150],
    [0, 0.08, 0.15, 0.08, 0]
  );
  const backgroundOpacity = useSpring(backgroundOpacitySync, { mass: 0.1, stiffness: 150, damping: 12 });
  const backgroundColor = useTransform(backgroundOpacity, (opacity) => `rgba(143, 92, 63, ${opacity})`);

  const commonProps = {
    ref: ref as RefObject<HTMLAnchorElement> & RefObject<HTMLButtonElement>,
    'aria-label': label,
    className:
      'group relative inline-flex items-center justify-center rounded-full text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(143,92,63,0.2)]',
  };

  const itemStyle = {
    paddingLeft: paddingX,
    paddingRight: paddingX,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor,
  };

  if (href) {
    return (
      <motion.a
        {...commonProps}
        href={href}
        style={itemStyle}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
        <span
          aria-hidden='true'
          className='pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-[rgba(255,250,244,0.96)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground opacity-0 shadow-[0_18px_30px_rgba(75,54,40,0.1)] transition-all duration-150 ease-out group-hover:opacity-100 group-hover:-translate-y-0.5'
        >
          {label}
        </span>
      </motion.a>
    );
  }

  return (
    <motion.button
      {...commonProps}
      type="button"
      onClick={onClick}
      style={itemStyle}
    >
      {children}
      <span
        aria-hidden='true'
        className='pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-[rgba(255,250,244,0.96)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground opacity-0 shadow-[0_18px_30px_rgba(75,54,40,0.1)] transition-all duration-150 ease-out group-hover:opacity-100 group-hover:-translate-y-0.5'
      >
        {label}
      </span>
    </motion.button>
  );
}

function NavBarComponent({ className, style }: NavBarProps) {
  const mouseX = useMotionValue(Infinity);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      aria-label='Primary navigation'
      onPointerMove={(event) => {
        if (event.pointerType === 'mouse') {
          mouseX.set(event.pageX);
        }
      }}
      onPointerLeave={() => mouseX.set(Infinity)}
      className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 ${className ?? ''}`}
      style={style}
    >
      <div className='flex items-center gap-1 rounded-full border border-border bg-[rgba(255,248,240,0.84)] px-4 py-3 shadow-[0_20px_45px_rgba(75,54,40,0.12)] backdrop-blur-xl'>
        <NavItem mouseX={mouseX} onClick={scrollToTop} label="Home">
          <HomeIcon aria-hidden='true' width={20} height={20} />
        </NavItem>

        <div aria-hidden="true" className="h-5 w-px bg-border" />

        <NavItem mouseX={mouseX} href="https://github.com/whyvineet" label="GitHub" external>
          <GitHubLogoIcon aria-hidden="true" width={20} height={20} />
        </NavItem>

        <NavItem mouseX={mouseX} href="https://linkedin.com/in/whyvineet" label="LinkedIn" external>
          <LinkedInLogoIcon aria-hidden="true" width={20} height={20} />
        </NavItem>

        <NavItem mouseX={mouseX} href="mailto:whyvineet@outlook.com" label="Email" external>
          <EnvelopeOpenIcon aria-hidden="true" width={20} height={20} />
        </NavItem>
      </div>
    </motion.nav>
  );
}

export default memo(NavBarComponent);
