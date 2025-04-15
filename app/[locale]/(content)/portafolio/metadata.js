import { metadataPortafolio } from "./metadata-portafolio";

export function generateMetadata({ params }) {
  const locale = params?.locale?.toLowerCase() || "en";
  return metadataPortafolio[locale] || metadataPortafolio["en"];
}
