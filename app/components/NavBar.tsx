'use client';

import { HomeIcon, GitHubLogoIcon, LinkedInLogoIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  label: string;
  mouseX: MotionValue<number>;
  external?: boolean;
}

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
    [0, 0.05, 0.1, 0.05, 0]
  );
  const backgroundOpacity = useSpring(backgroundOpacitySync, { mass: 0.1, stiffness: 150, damping: 12 });

  const commonProps = {
    ref: ref as React.RefObject<HTMLAnchorElement> & React.RefObject<HTMLButtonElement>,
    'aria-label': label,
    className: 'group relative inline-flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300',
  };

  if (href) {
    return (
      <motion.a
        {...commonProps}
        href={href}
        style={{
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: backgroundOpacity,
        }}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
        <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 shadow-sm transition-all duration-150 ease-out group-hover:opacity-100 group-hover:-translate-y-0.5 dark:bg-gray-100 dark:text-gray-900">
          {label}
        </span>
      </motion.a>
    );
  }

  return (
    <motion.button
      {...commonProps}
      onClick={onClick}
      style={{
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: 8,
        paddingBottom: 8,
        backgroundColor: backgroundOpacity,
      }}
    >
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white opacity-0 shadow-sm transition-all duration-150 ease-out group-hover:opacity-100 group-hover:-translate-y-0.5">
        {label}
      </span>
    </motion.button>
  );
}

export default function NavBar({ className }: { className?: string }) {
  const mouseX = useMotionValue(Infinity);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav 
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 ${className ?? ""}`}
    >
      <div className="flex items-center gap-1 px-4 py-3 bg-background border border-gray-200 rounded-full shadow-sm">
        <NavItem mouseX={mouseX} onClick={scrollToTop} label="Home">
          <HomeIcon width={20} height={20} />
        </NavItem>

        <div className="w-px h-5 bg-gray-200" />

        <NavItem mouseX={mouseX} href="https://github.com/whyvineet" label="GitHub" external>
          <GitHubLogoIcon width={20} height={20} />
        </NavItem>

        <NavItem mouseX={mouseX} href="https://linkedin.com/in/whyvineet" label="LinkedIn" external>
          <LinkedInLogoIcon width={20} height={20} />
        </NavItem>

        <NavItem mouseX={mouseX} href="mailto:whyvineet@outlook.com" label="Email" external>
          <EnvelopeOpenIcon width={20} height={20} />
        </NavItem>
      </div>
    </motion.nav>
  );
}
