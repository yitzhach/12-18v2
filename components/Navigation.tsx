import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-center md:justify-between py-4">
          {/* Logo/Brand - Left side on desktop, centered on mobile */}
          <div className="hidden md:block">
            <Link
              to="/"
              className="text-sm font-light tracking-widest text-gray-900 uppercase hover:text-gray-600 transition-colors"
            >
              Isaac Anderson Art
            </Link>
          </div>

          {/* Menu Items - Centered */}
          <div className="flex items-center space-x-6 md:space-x-8 lg:space-x-12 flex-wrap justify-center">
            <Link
              to="/"
              className={`text-xs md:text-sm font-light tracking-widest uppercase transition-colors ${
                isActive('/') ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className={`text-xs md:text-sm font-light tracking-widest uppercase transition-colors ${
                isActive('/portfolio') ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/installed"
              className={`text-xs md:text-sm font-light tracking-widest uppercase transition-colors ${
                isActive('/installed') ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Installed
            </Link>
            <Link
              to="/commissions"
              className={`text-xs md:text-sm font-light tracking-widest uppercase transition-colors ${
                isActive('/commissions') ? 'text-gray-900' : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Commissions
            </Link>
          </div>

          {/* Right side spacer for desktop */}
          <div className="hidden md:block w-[140px]"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

