import React from "react";

// This will prevent the root layout from being applied
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default function ConfirmarLayout({ children }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}