"use client";

import Script from "next/script";

export default function MetricsTracker() {
  return (
    <Script
      strategy="afterInteractive"
      src="https://tracker.metricool.com/resources/be.js"
      onLoad={() => {
        if (window.beTracker) {
          window.beTracker.t({ hash: "d7ce2c35767e4678311caaa339521e2a" });
        }
      }}
    />
  );
}