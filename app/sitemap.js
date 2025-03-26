export default function sitemap() {
    const baseUrl = "https://antaresinnovate.com";
  
    const staticRoutes = [
      "/about",
      "/b2fintech",
      "/blog",
      "/ciml",
      "/form-contact",
      "/fundacion",
      "/lili-estevez",
      "/marketing",
      "/monster-energy",
      "/oim",
      "/politecnico",
      "/portafolio",
      "/real-estate",
      "/upardigital",
      "/uparsistem",
      "/web-page",
      "/wersus",
    ];
  
    const urls = staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
    }));
  
    return urls;
  }
  