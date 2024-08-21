// types/nuxt-seo.d.ts
import { NuxtConfig } from '@nuxt/schema';

interface SeoMetas {
  titleTemplate?: string;
  defaultTitle?: string;
  description?: string;
  keywords?: string[];
  ogImage?: {
    path: string;
    width?: number;
    height?: number;
    alt?: string;
  };
}

interface SeoRobots {
  enabled?: boolean;
  sitemap?: string;
  disallow?: string[];
}

interface SeoSitemap {
  hostname?: string;
  gzip?: boolean;
  routes?: () => Promise<string[]>;
}

interface SeoSchemaOrg {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
}

interface SeoOptions {
  site?: {
    name: string;
    url: string;
  };
  metas?: SeoMetas;
  robots?: SeoRobots;
  sitemap?: SeoSitemap;
  schemaOrg?: SeoSchemaOrg;
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    seo?: SeoOptions;
  }
  interface NuxtOptions {
    seo?: SeoOptions;
  }
}
