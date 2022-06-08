import { handleSitemapRequests } from '@faustjs/next';
import { NextResponse } from 'next/server';

export default async function _middleware(req) {
  const sitemapRequest = await handleSitemapRequests(req, {
    wpUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL,
    sitemapIndexPath: `/sitemap_index.xml`,
  });
  if (sitemapRequest) {
    return sitemapRequest;
  }

  return NextResponse.next();
}