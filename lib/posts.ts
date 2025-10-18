// Reference:
// https://github.com/emanuelefavero/nextjs-app-router-blog/blob/8a1b7c158f0b9d6217ee73a757696def2b2f5363/lib/posts.ts#L7

import {execSync} from 'child_process'
import fs from 'fs'
import path from 'path'

const images = ['better.png', 'lock.png', 'peer2peer.png', 'etl.png']

// Import 'gray-matter', library for parsing the metadata in each markdown file
import matter from 'gray-matter'

export type PostData = {
  title: string
  subtitle?: string
  date: Date
  contentHtml: string
  time: number
  description: string
  author: string
}

export type AllPostsData = {
  date: Date
  title: string
  subtitle?: string
  id: string
  time: number
  description: string
  author: string
}[]

// --------------------------------
// GET THE PATH OF THE POSTS FOLDER
const postsDirectory = path.join(process.cwd(), 'posts') // process.cwd() returns the absolute path of the current working directory

export function getSortedPostsData() {
  // Get file names under /posts
  const files = fs.readdirSync(postsDirectory, {withFileTypes: true}) // [ 'pre-rendering.md', 'ssg-ssr.md' ]

  // Get the data from each file
  const allPostsData = (files.filter((f) => f.isFile())).map((f) => {
    // Remove ".md" from file name to get id
    const id = f.name.replace(/\.md$/, '') // id = 'pre-rendering', 'ssg-ssr'

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, f.name)
    // /Users/ef/Desktop/nextjs-blog/posts/pre-rendering.md
    const fileContents = fs.readFileSync(fullPath, 'utf8') // .md string content

    const time = readingTime(fileContents);

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    const data = matterResult.data as Omit<PostData, "time">;

    // Combine the data with the id
    return {
      id,
      time,
      ...{ ...data },
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
      ...post
    }
  })
}

export function getAllPostIds() {
  const files = fs.readdirSync(postsDirectory, {withFileTypes: true})

  return (files.filter((f) => f.isFile())).map((f) => {
    return {
      params: {
        id: f.name.replace(/\.md$/, ''),
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
  return Math.ceil(wordCounter(text) / wordsPerMinute);
}

// The returned array must have the params key otherwise `getStaticPaths` will fail

// --------------------------------
// GET THE DATA OF A SINGLE POST FROM THE ID
export async function getPostData(id: string, dir: string = postsDirectory) {
  const fullPath = path.join(dir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const time = readingTime(fileContents);

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const contentHtml = execSync("pandoc -f markdown -t html", {input: matterResult.content}).toString()

  const data = matterResult.data as Omit<Omit<PostData, "time">, "contentHtml">;

  // Combine the data with the id
  return {
    id,
    time,
    contentHtml,
    ...data,
  }
}
