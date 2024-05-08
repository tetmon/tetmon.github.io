// https://searchengineland.com/microsoft-bing-to-rely-more-on-lastmod-date-in-xml-sitemap-files-for-crawling-392491


import { getSortedPostsData } from '@/lib/posts'
import { MetadataRoute } from 'next';


const URL = "https://www.tetmon.com";


export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getSortedPostsData();
  return [
    {
      url: URL,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${URL}/faq`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}/get-demo`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${URL}/edgeset/manual/current/en-US`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${URL}/blog/${post.id}`,
      lastModified: new Date(post.date),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ]
}