import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  onLogoClick?: () => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  className = '',
  containerClassName = '',
  showHeader = true,
  showFooter = true,
  onLogoClick,
}) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col ${className}`}>
      {/* Header */}
      {showHeader && <Header onLogoClick={onLogoClick} />}
      
      {/* Main Content */}
      <main className={`flex-1 ${containerClassName}`}>
        {children}
      </main>
      
      {/* Footer */}
      {showFooter && <Footer />}
    </div>
  );
};

// Container Component
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  padding?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
  padding = true,
}) => {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-none',
  };

  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-8' : '';

  return (
    <div className={`${sizes[size]} mx-auto ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
};