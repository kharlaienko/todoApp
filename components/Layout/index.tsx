import React from 'react';

interface LayoutProps {
   children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
   return <div className="w-10 bg-slate-900 dark:text-white">{children}</div>;
};

export default Layout;
