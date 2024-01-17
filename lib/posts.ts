// Reference:
// https://github.com/emanuelefavero/nextjs-app-router-blog/blob/8a1b7c158f0b9d6217ee73a757696def2b2f5363/lib/posts.ts#L7

import fs from 'fs'
import path from 'path'

type PostData = {
  title: string
  date: string
  description: string
  author: string
}

const images = ['better.png', 'lock.png', 'peer2peer.png', 'etl.png']

// Import 'gray-matter', library for parsing the metadata in each markdown file
import matter from 'gray-matter'

// Import 'remark', library for rendering markdown
import { remark } from 'remark'
import html from 'remark-html'

// --------------------------------
// GET THE PATH OF THE POSTS FOLDER
const postsDirectory = path.join(process.cwd(), 'posts') // process.cwd() returns the absolute path of the current working directory

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory) // [ 'pre-rendering.md', 'ssg-ssr.md' ]

  // Get the data from each file
  const allPostsData = fileNames.map((filename) => {
    // Remove ".md" from file name to get id
    const id = filename.replace(/\.md$/, '') // id = 'pre-rendering', 'ssg-ssr'

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, filename)
    // /Users/ef/Desktop/nextjs-blog/posts/pre-rendering.md
    const fileContents = fs.readFileSync(fullPath, 'utf8') // .md string content

    const time = readingTime(fileContents);

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const data = matterResult.data as PostData;

    // Combine the data with the id
    return {
      id,
      time,
      ...{...data},
    }
  })

  // Sort posts by date and return
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {  
      return -1
    }
  }).map((post, i) => {
    return {
      ...post,
      image: `${post.id}/hero.png`
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    }
  })
}

function wordCounter(input: string) {
  const text = input.split(/\s+/)
  let wordCount = 0
  for (let i = 0; i < text.length; i++) {
      if (text[i] !== ' ' && isWord(text[i])) {
          wordCount++
      }
  }
  return wordCount
}

function isWord(str: string) {
  let alphaNumericFound = false
  for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i)
      if ((code > 47 && code < 58) || // numeric (0-9)
          (code > 64 && code < 91) || // upper alpha (A-Z)
          (code > 96 && code < 123)) { // lower alpha (a-z)
          alphaNumericFound = true
          return alphaNumericFound
      }
  }
  return alphaNumericFound
}

const wordsPerMinute = 225

function readingTime(text: string) {
    return Math.ceil(wordCounter(text) / wordsPerMinute)
}

// The returned array must have the params key otherwise `getStaticPaths` will fail

// --------------------------------
// GET THE DATA OF A SINGLE POST FROM THE ID
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const time = readingTime(fileContents);

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, {sanitize: false})
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  const data = matterResult.data as PostData

  // Combine the data with the id
  return {
    id,
    time,
    contentHtml,
    ...data,
  }
}
