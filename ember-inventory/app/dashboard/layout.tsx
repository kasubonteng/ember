import React from "react";
import Sidebar from "./_components/sidebar";
import Header from "./_components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Sidebar />
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <Header />

          {children}
        </div>
      </div>
    </div>
  );
}
