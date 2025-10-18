import fs from 'fs'
import { Inter } from 'next/font/google'
import {getPostData, PostData, AllPostsData} from '@/lib/posts'
import Link from 'next/link'
import path from 'path'
import { DINish } from '@/app/fonts'
import PageNavigator from '@/components/pageNavigator'
import ThreeVs from '@/components/threeVs'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })
type Params = {
  slug: string
}

type Props = {
  params: Params
}

const dateFormatter = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long', day: 'numeric' })

const Meta = ({ date, time, author }: Partial<AllPostsData[0]>) => {
  return (
    <div className='flex flex-col py-4'>
      <small className='text-sm font-bold text-gray-500'>
        {author}
      </small>
      <div className='flex font-medium text-gray-500'>
        <small className='inline-flex items-center'>
          {time} min. read
        </small>
        <span className='px-1'>|</span>
        {date ? <small className='inline-flex items-center'>
          {dateFormatter.format(date)}
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
    params.slug === 'the-threeVs-of-data' ? <ThreeVs /> : (
      <>
        <section className='m-auto max-w-lg px-5 py-14 lg:max-w-6xl'>
          {/* Post Title */}
          <div className='m-auto max-w-3xl'>
            <Link href="/blog" className='flex items-center pb-6'>
              <svg viewBox="0 0 24 24" width={17} height={17} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9H16.5C18.9853 9 21 11.0147 21 13.5C21 15.9853 18.9853 18 16.5 18H12M3 9L7 5M3 9L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span className='px-2'>Back to posts</span>
            </Link>
            <header>
              <h1 className={`${DINish.className} text-3xl font-semibold text-zinc-700 md:text-5xl md:leading-11`}>{postData.title}</h1>
              {postData.subtitle ? <p className="subtitle">{postData.subtitle}</p> : null}
            </header>
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
      </>
    )
  )
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/
