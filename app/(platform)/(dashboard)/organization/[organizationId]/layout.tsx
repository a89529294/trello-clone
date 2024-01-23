import { OrgControl } from "@/app/(platform)/(dashboard)/organization/[organizationId]/_components/org-control";
import { ReactNode } from "react";

export default function OrganizationIdLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <OrgControl />
      {children}
    </>
  );
}
