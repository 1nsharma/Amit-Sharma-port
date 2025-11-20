import React from 'react';
import { motion } from 'framer-motion'; // Upgrade: Optional hover animation wrapper

type IconProps = {
  className?: string;
  size?: 'small' | 'medium' | 'large'; // Upgrade: Size variants
  'aria-label'?: string; // Upgrade: Accessibility label
  onClick?: () => void; // Upgrade: Clickable support
};

const getSizeClasses = (size: IconProps['size'] = 'medium') => {
  switch (size) {
    case 'small': return 'h-4 w-4';
    case 'large': return 'h-8 w-8';
    default: return 'h-6 w-6';
  }
};

// Wrapper for animated icons — keep API identical but apply Amvision visual tokens
const AnimatedIcon = motion(React.forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { className = '', size, 'aria-label': ariaLabel, onClick, children, ...rest } = props;
  const sizeClasses = getSizeClasses(size);
  // apply theme-friendly defaults while allowing caller overrides
  const baseClasses = `stroke-current ${sizeClasses} ${className}`.trim();

  return (
    <svg
      ref={ref}
      className={baseClasses}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...rest}
      aria-label={ariaLabel}
      onClick={onClick}
      role={onClick ? 'img' : undefined}
      tabIndex={onClick ? 0 : undefined}
      // keep focus-visible accessible
      focusable={onClick ? 'true' : 'false'}
    >
      {children}
    </svg>
  );
}));

AnimatedIcon.displayName = 'AnimatedIcon';

// Base icons – wrapped with animation support and Amvision-friendly defaults
export const MailIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Mail icon'}
    onClick={onClick}
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.08, rotate: 0 }}
    whileTap={{ scale: 0.96 }}
    transition={{ duration: 0.18 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </AnimatedIcon>
);

export const PhoneIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Phone icon'}
    onClick={onClick}
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.06 }}
    transition={{ duration: 0.18 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </AnimatedIcon>
);

export const LocationMarkerIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Location marker icon'}
    onClick={onClick}
    whileHover={{ scale: 1.06 }}
    transition={{ duration: 0.18 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </AnimatedIcon>
);

export const CheckIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Check icon'}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.14 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </AnimatedIcon>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Arrow right icon'}
    onClick={onClick}
    whileHover={{ x: 4 }}
    transition={{ duration: 0.14 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </AnimatedIcon>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Arrow left icon'}
    onClick={onClick}
    whileHover={{ x: -4 }}
    transition={{ duration: 0.14 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
  </AnimatedIcon>
);

export const SunIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Sun icon'}
    onClick={onClick}
    whileHover={{ rotate: 12, scale: 1.04 }}
    transition={{ duration: 0.2 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </AnimatedIcon>
);

export const MoonIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Moon icon'}
    onClick={onClick}
    whileHover={{ rotate: -12, scale: 1.04 }}
    transition={{ duration: 0.2 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </AnimatedIcon>
);

export const HomeIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Home icon'}
    onClick={onClick}
    whileHover={{ scale: 1.04 }}
    transition={{ duration: 0.16 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </AnimatedIcon>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Briefcase icon'}
    onClick={onClick}
    whileHover={{ y: -2 }}
    transition={{ duration: 0.16 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </AnimatedIcon>
);

export const CodeIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Code icon'}
    onClick={onClick}
    whileHover={{ rotate: 6, scale: 1.03 }}
    transition={{ duration: 0.16 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </AnimatedIcon>
);

export const AcademicCapIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Academic cap icon'}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.16 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M12 14l9-5-9-5-9 5 9 5z" />
    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
  </AnimatedIcon>
);

export const GlobeIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Globe icon'}
    onClick={onClick}
    whileHover={{ rotate: 6 }}
    transition={{ duration: 0.18 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.293l.5-1.5A2 2 0 0110.121 2h3.758a2 2 0 011.914 1.793l.5 1.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </AnimatedIcon>
);

export const SparklesIcon: React.FC<IconProps> = ({ className, size, 'aria-label': ariaLabel, onClick }) => (
  <AnimatedIcon
    className={`${className || ''}`}
    size={size}
    aria-label={ariaLabel || 'Sparkles icon'}
    onClick={onClick}
    whileHover={{ scale: 1.07 }}
    transition={{ duration: 0.18 }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </AnimatedIcon>
);
