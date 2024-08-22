import React, { Suspense } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <p className="text-2xl font-semibold">Loading...</p>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default Layout;
