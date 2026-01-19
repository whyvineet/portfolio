'use client';

import { HomeIcon, GitHubLogoIcon, LinkedInLogoIcon, EnvelopeOpenIcon, SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

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
    className: 'inline-flex items-center justify-center text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800 transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-700',
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
    </motion.button>
  );
}

export default function NavBar() {
  const { isDark, toggleTheme } = useTheme();
  const mouseX = useMotionValue(Infinity);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav 
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 px-4 py-3 bg-[var(--background)] border border-gray-200 dark:border-gray-700 rounded-full shadow-sm">
        <NavItem mouseX={mouseX} onClick={scrollToTop} label="Home">
          <HomeIcon width={20} height={20} />
        </NavItem>

        <div className="w-px h-5 bg-gray-200 dark:bg-gray-700" />

        <NavItem mouseX={mouseX} href="https://github.com/whyvineet" label="GitHub" external>
          <GitHubLogoIcon width={20} height={20} />
        </NavItem>

        <NavItem mouseX={mouseX} href="https://linkedin.com/in/whyvineet" label="LinkedIn" external>
          <LinkedInLogoIcon width={20} height={20} />
        </NavItem>

        <NavItem mouseX={mouseX} href="mailto:whyvineet@outlook.com" label="Email" external>
          <EnvelopeOpenIcon width={20} height={20} />
        </NavItem>

        <div className="w-px h-5 bg-gray-200 dark:bg-gray-700" />

        <NavItem mouseX={mouseX} onClick={toggleTheme} label="Toggle theme">
          {isDark ? <SunIcon width={20} height={20} /> : <MoonIcon width={20} height={20} />}
        </NavItem>
      </div>
    </motion.nav>
  );
}
