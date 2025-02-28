'use client'
import React from "react";
import dynamic from "next/dynamic"; 
const Scene = dynamic(() => import("@/components/sections/3D/Scene"), {
  ssr: false,
});

export default function Confirmar() {
  return (
    <div suppressHydrationWarning>
      <Scene />
    </div>
  );
}
