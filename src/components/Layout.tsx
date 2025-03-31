
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-drv-darker">
      <Navbar />
      <div className="pt-20">
        {children}
      </div>
    </div>
  );
};

export default Layout;
