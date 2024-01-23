import Navbar from "@/app/(platform)/(dashboard)/_components/navbar";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full">
      <Navbar />
      {children}
    </div>
  );
}
