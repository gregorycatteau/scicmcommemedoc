// types/nuxt-security.d.ts
import { NuxtConfig } from '@nuxt/schema';

interface SecurityHeaders {
  crossOriginResourcePolicy?: string;
  crossOriginOpenerPolicy?: string;
  crossOriginEmbedderPolicy?: string;
  contentSecurityPolicy?: Record<string, string[] | boolean | string>;
  originAgentCluster?: string;
  referrerPolicy?: string;
  strictTransportSecurity?: {
    maxAge: number;
    includeSubdomains: boolean;
  };
  xContentTypeOptions?: string;
  xDNSPrefetchControl?: string;
  xDownloadOptions?: string;
  xFrameOptions?: string;
  xPermittedCrossDomainPolicies?: string;
  xXSSProtection?: string;
  permissionsPolicy?: Record<string, string[]>;
}

interface SecurityOptions {
  strict?: boolean;
  headers?: SecurityHeaders;
  requestSizeLimiter?: {
    maxRequestSizeInBytes?: number;
    maxUploadFileRequestInBytes?: number;
    throwError?: boolean;
  };
  rateLimiter?: {
    tokensPerInterval?: number;
    interval?: number;
    headers?: boolean;
    driver?: { name: string };
    throwError?: boolean;
  };
  xssValidator?: { throwError?: boolean };
  corsHandler?: {
    origin?: string;
    methods?: string[];
    preflight?: { statusCode: number };
  };
  allowedMethodsRestricter?: { methods?: string; throwError?: boolean };
  hidePoweredBy?: boolean;
  basicAuth?: boolean;
  csrf?: boolean;
  nonce?: boolean;
  removeLoggers?: {
    external?: string[];
    consoleType?: string[];
    include?: RegExp[];
    exclude?: RegExp[];
  };
  ssg?: {
    meta?: boolean;
    hashScripts?: boolean;
    hashStyles?: boolean;
    nitroHeaders?: boolean;
    exportToPresets?: boolean;
  };
  sri?: boolean;
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    security?: SecurityOptions;
  }
  interface NuxtOptions {
    security?: SecurityOptions;
  }
}
