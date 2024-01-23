"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useCallback, useEffect } from "react";

export const OrgControl = () => {
  const params = useParams();
  const { setActive } = useOrganizationList();
  const orgId =
    typeof params.organizationId === "string"
      ? params.organizationId
      : params.organizationId[0];

  useEffect(() => {
    if (typeof orgId === "string" && setActive)
      setActive({
        organization: orgId,
      });
  }, [orgId, setActive]);

  return null;
};
