import React from "react";
import LayoutComponents from "@/components/layout/LayoutComponents";

export default function Layout({ children }) {
  return (
     <>
       <LayoutComponents />
       <main>
         {children}
       </main>
     </>
   )
 }
 