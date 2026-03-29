import type { MetadataRoute } from "next";

const SITE_URL = "https://portfolio-migration-next.vercel.app";
const LAST_MODIFIED = new Date();

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  
  return [
    { url: `${SITE_URL}/`, lastModified: LAST_MODIFIED },
    { url: `${SITE_URL}/cover-letter`, lastModified: LAST_MODIFIED },
    { url: `${SITE_URL}/guest-book`, lastModified: LAST_MODIFIED},
    { url: `${SITE_URL}/profile`, lastModified: LAST_MODIFIED},
    { url: `${SITE_URL}/project`, lastModified: LAST_MODIFIED}
  ];
}