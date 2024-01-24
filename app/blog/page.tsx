import { getSortedPostsData } from '@/lib/posts'
import { Source_Serif_4 } from 'next/font/google'
import Link from 'next/link'
import { DateTime } from 'luxon'
import Image from 'next/image'


const sourceSerifPro = Source_Serif_4({ subsets: ['latin'], weight: ['400', '500', '700'] })


type AllPostsData = {
  date: string
  title: string
  id: string
  time: number
  description: string
  image: string,
  author: string
}[]

function formatDate(date: string) {
  return DateTime.fromFormat(date, 'yyyy-MM-dd').toFormat('MMMM dd, yyyy');
}

const Meta = ({ date, time, author }: Partial<AllPostsData[0]>) => {
  return (
    <div className='flex flex-col gap-1 sm:flex-row md:gap-2'>
      <small>
        {author}
      </small>
      <span className='hidden sm:inline'>|</span>
      <div className='flex gap-2'>
        {date ? <small>
          {formatDate(date)}
        </small> : null}|
        <small>
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
        {allPostsData.map(({ id, time, date, title, image, author, description }, index) => (
          <li key={id} className='px-4 md:px-12'>
            {index === 0 ?
              <Link className='mb-1 mt-5 grid grid-cols-12 gap-4 border-b pb-6 font-medium' href={`/blog/${id}`}>
                <div className='order-1 col-span-12 flex flex-col justify-center lg:col-span-6'>
                  <h1 className='text-3xl font-medium leading-8 md:leading-11 lg:text-4xl'>{title}</h1>
                  <p className={`max-w-lg py-8 text-left text-base text-gray-600 md:text-lg ${sourceSerifPro.className}`}>
                    {description}
                  </p>
                  <Meta date={date} time={time} author={author} />
                </div>
                <div className='order-2 col-span-12 rounded-md border bg-white lg:col-span-6'>
                  <Image src={`/blog/${image}`} alt='better' width={600} height={400} className='h-full w-full' />
                </div>
              </Link> :
              <Link className='my-4 grid grid-cols-12 gap-4 rounded-md font-medium transition-all hover:bg-gray-50 md:p-4' href={`/blog/${id}`}>
                <div className='col-span-12 rounded-md border bg-white lg:col-span-2'>
                  <Image src={`/blog/${image}`} alt='better' width={600} height={400} className='h-full w-full' />
                </div>
                <div className='col-span-12 flex flex-col justify-center lg:col-span-6'>
                  <h1 className='pb-4 text-2xl font-medium md:leading-11 lg:text-3xl'>{title}</h1>
                  <Meta date={date} time={time} author={author} />
                </div>
              </Link>}
          </li>
        ))}
      </ul>
    </section>
  )
}