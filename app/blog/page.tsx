import { getSortedPostsData } from '@/lib/posts'
import { Source_Serif_4, Inter } from 'next/font/google'
import Link from 'next/link'
import { DateTime } from 'luxon'
import Image from 'next/image'
import { DINish } from '../fonts'


const sourceSerifPro = Source_Serif_4({ subsets: ['latin'], weight: ['400', '500', '600'] })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })

type AllPostsData = {
  date: string
  title: string
  id: string
  time: number
  description: string
  author: string
}[]

function formatDate(date: string) {
  return DateTime.fromFormat(date, 'yyyy-MM-dd').toFormat('MMMM dd, yyyy');
}

const Meta = ({ date, time, author }: Partial<AllPostsData[0]>) => {
  return (
    <div className='flex gap-1 sm:flex-row md:gap-2 text-gray-500'>
      <small className='inline-flex items-center text-gray-500'>
        {author}
      </small>
      <span className='inline'>|</span>
      <div className='flex gap-2'>
        {date ? <small className='inline-flex items-center'>
          {formatDate(date)}
        </small> : null}|
        <small className='inline-flex items-center'>
          {time} min. read
        </small>
      </div>
    </div>
  )
}

export default function Blog() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
    <section className='m-auto grid max-w-8xl grid-cols-18 pt-14'>
      <ul className='col-span-full pb-6'>
        {allPostsData.map(({ id, time, date, title, author, description }, index) => (
          <li key={id} className='px-4 md:px-12'>
            {index === 0 ?
              <Link className='mb-1 mt-5 grid grid-cols-12 gap-4 border-b pb-6 font-medium' href={`/blog/${id}`}>
                <div className='order-1 col-span-12 flex flex-col justify-center lg:col-span-6'>
                  <h1 className={`${DINish.className} text-3xl font-semibold text-zinc-700 leading-8 md:leading-11 lg:text-4xl`}>{title}</h1>
                  <p className={`max-w-lg py-4 lg:py-8 text-left text-base text-gray-600 md:text-base ${inter.className}`}>
                    {description}
                  </p>
                  <Meta date={date} time={time} author={author} />
                </div>
                <div className='order-2 col-span-12 rounded-md border bg-white lg:col-span-6'>
                  <img
                    sizes="(max-width: 1080px) 100vw, 1080px"
                    srcSet={`
                      /blog/${id}/post_img_sm.png 200w,
                      /blog/${id}/post_img_md.png 640w,
                      /blog/${id}/post_img_lg.png 889w,
                      /blog/${id}/post_img_xl.png 1071w,
                      /blog/${id}/post_img.png 1080w`}
                    src={`/blog/${id}/post_img.png`}
                    alt={title}></img>
                </div>
              </Link> :
              <Link className='my-4 grid grid-cols-12 gap-4 mb-10 md:mb-0 rounded-md font-medium transition-all hover:bg-gray-50 md:p-4' href={`/blog/${id}`}>
                <div className='col-span-12 rounded-md bg-white lg:col-span-2'>
                  <img
                    sizes="(max-width: 1080px) 100vw, 1080px"
                    srcSet={`
                      /blog/${id}/post_img_sm.png 200w,
                      /blog/${id}/post_img_md.png 640w,
                      /blog/${id}/post_img_lg.png 889w,
                      /blog/${id}/post_img_xl.png 1071w,
                      /blog/${id}/post_img.png 1080w`}
                    src={`/blog/${id}/post_img.png`}
                    alt={title}></img>
                </div>
                <div className='col-span-12 flex flex-col justify-center lg:col-span-6'>
                  <h1 className={`${DINish.className} pb-1 lg:pb-4 text-2xl font-semibold text-zinc-600 md:leading-11 lg:text-2xl`}>{title}</h1>
                  <Meta date={date} time={time} author={author} />
                </div>
              </Link>}
          </li>
        ))}
      </ul>
    </section>
  )
}