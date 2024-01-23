import { Footer } from "@/app/(marketing)/_components/footer";
import { Navbar } from "@/app/(marketing)/_components/navbar";
import { ReactNode } from "react";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer />
    </div>
  );
}
