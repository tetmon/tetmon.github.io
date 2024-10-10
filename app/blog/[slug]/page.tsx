import fs from 'fs'
import { Inter } from 'next/font/google'
import { getPostData } from '@/lib/posts'
import formatDate from '@/lib/format'
import Link from 'next/link'
import path from 'path'
import { DINish } from '@/app/fonts'
import PageNavigator from '@/components/pageNavigator'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })
type Params = {
  slug: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  contentHtml: string
  time: number
  author: string
}

type AllPostsData = {
  date: string
  title: string
  id: string
  time: number
  description: string
  author: string
}[]


const Meta = ({ date, time, author }: Partial<AllPostsData[0]>) => {
  return (
    <div className='flex flex-col py-4'>
      <div>
        <small className='text-sm font-bold'>
          {author}
        </small>
      </div>
      <div className='flex'>
        <small className='font-bold text-gray-500'>
          {time} min. read
        </small>
        <span className='px-1'>|</span>
        {date ? <small className='font-bold text-gray-500'>
          {formatDate(date)}
        </small> : null}
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.slug)

  return {
    title: postData.title,
  }
}

export function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => {
    return {
      slug: path.basename(fileName, '.md')
    }
  });
}


// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.slug);
  const { date, time, author } = postData;

  return (
    <section className='m-auto max-w-lg px-5 py-14 lg:max-w-6xl'>
      {/* Post Title */}
      <div className='m-auto max-w-3xl'>
        <Link href="/blog" className='flex items-center pb-6'>
          <svg viewBox="0 0 24 24" width={17} height={17} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12M3 9L7 5M3 9L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <span className='px-2'>Back to posts</span>
        </Link>
        <h1 className={`${DINish.className} text-3xl font-semibold text-zinc-700 md:text-5xl md:leading-11`}>{postData.title}</h1>
        <Meta date={date} time={time} author={author} />

        {/* Post Content */}
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`markdown-content pt-4 ${inter.className} text-base leading-normal`}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>

      {/* Page Navigator */}
      <PageNavigator />
    </section>
  )
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/
