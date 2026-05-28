import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { site } from "@/content/site";

export type SeoProps = {
  title: string;
  description: string;
  path?: string;
  imageUrl?: string;
  noindex?: boolean;
  children?: ReactNode;
};

const DEFAULT_ORIGIN = "https://auraskinandhairclinic.com";
const DEFAULT_OG = "/images/og/og-cover.svg";

function absoluteUrl(pathOrUrl: string, origin: string) {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) return pathOrUrl;
  return `${origin}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

export function Seo({ title, description, path = "/", imageUrl, noindex, children }: SeoProps) {
  const origin = DEFAULT_ORIGIN;
  const url = absoluteUrl(path, origin);
  const img = absoluteUrl(imageUrl ?? DEFAULT_OG, origin);
  const fullTitle = `${title} | ${site.name}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {noindex ? <meta name="robots" content="noindex,nofollow" /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />

      {children}
    </Helmet>
  );
}

