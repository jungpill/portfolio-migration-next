import type { MetadataRoute } from "next";

const SITE_URL = "https://jungpillportfolio.shop";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  return [
    { url: `${SITE_URL}/`, lastModified: new Date() },
    { url: `${SITE_URL}/cover-letter`, lastModified: new Date() },
    { url: `${SITE_URL}/guest-book`, lastModified: new Date()},
    { url: `${SITE_URL}/profile`, lastModified: new Date()},
    { url: `${SITE_URL}/project`, lastModified: new Date()}
  ];
}