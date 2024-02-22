
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Import 'remark', library for rendering markdown
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

export default async function parse(file: string) {
  const fullPath = path.join(file);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(remarkGfm)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const data = matterResult.data;

  // Combine the data with the id
  return {
    contentHtml,
    ...data,
  }
}
