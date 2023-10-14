'use client';
import { componentsHome, componentsDescribe } from "@/components/modules";
import { useState } from "react";

export default function Website() {
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  return (
    <>
      <componentsHome.HomePage loadingAnimation={loadingAnimation} setLoadingAnimation={setLoadingAnimation} />
    </>
  );
}
