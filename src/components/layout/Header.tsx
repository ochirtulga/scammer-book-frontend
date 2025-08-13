import React, { useState } from 'react';

interface HeaderProps {
  onLogoClick?: () => void;
  className?: string;
}

interface NavigationItem {
  label: string;
  href: string;
  badge?: string | number;
}

export const Header: React.FC<HeaderProps> = ({
  onLogoClick,
  className = '',
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { label: 'About', href: '/about' },
    { label: 'Report', href: '/report' },
    { label: 'Help', href: '/help' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`bg-white shadow-sm border-b border-slate-200 sticky top-0 z-40 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Logo onClick={onLogoClick} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                >
                  <span className="font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
              
              {/* Additional mobile-only items */}
              <div className="border-t border-slate-200 mt-4 pt-4 space-y-2">
                <a
                  href="/login"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors font-medium"
                >
                  Sign In
                </a>
                <a
                  href="/register"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors font-medium text-center"
                >
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Logo Component
interface LogoProps {
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  onClick,
  size = 'md',
  showText = true,
  className = '',
}) => {
  const sizes = {
    sm: { container: 'w-6 h-6', icon: 'w-4 h-4', text: 'text-lg' },
    md: { container: 'w-8 h-8', icon: 'w-5 h-5', text: 'text-xl' },
    lg: { container: 'w-10 h-10', icon: 'w-6 h-6', text: 'text-2xl' },
  };

  const currentSize = sizes[size];

  const logoContent = (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className={`${currentSize.container} bg-red-600 rounded-lg flex items-center justify-center`}>
        <svg className={`${currentSize.icon} text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
      {showText && (
        <span className={`${currentSize.text} font-bold text-slate-900`}>
          ScamGuard
        </span>
      )}
    </div>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg"
        aria-label="Go to homepage"
      >
        {logoContent}
      </button>
    );
  }

  return logoContent;
};