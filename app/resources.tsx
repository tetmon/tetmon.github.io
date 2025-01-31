import { DINish, Inter } from "./fonts";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
// Define the Post type
interface Post {
  id: string;
  title: string;
  date: string;
  // Add other relevant fields
}

export default function Resources() {
  const posts = getSortedPostsData();
  return (
    <section className="relative py-20">
      <div className="max-w-[1490px] mx-auto grid grid-cols-12">
        <div className="col-start-2 col-span-10">
          <div className="flex justify-between items-center">
            <h2 className={`text-2xl font-bold ${DINish.className} xl:text-3xl text-primary`}>Featured Posts</h2>
            <Link
              href="/blog"
              className={`
                bg-gray-100
                font-semibold 
                text-primary 
                text-sm 
                hover:bg-gray-200 
                hover:text-primary-dark 
                transition-colors 
                duration-200 
                px-4 
                py-2 
                rounded-sm 
                flex 
                items-center
                justify-center
                ${Inter.className}
              `}
            >
              View All
            </Link>
          </div>
        </div>
        <div className="col-start-2 col-span-10 mt-8">
          <div className="flex overflow-x-auto space-x-6 pb-4">
            {posts?.slice(0, 5).map((post) => (
              <div key={post.id} className="shrink-0 w-[268px] sm:w-[320px] lg:w-[364px] relative">
                <Link href={`/blog/${post.id}`} className="absolute z-10 w-full h-full" aria-label={`Read more about ${post.title}`} />
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
                  <img
                    loading="lazy"
                    className="aspect-[1.77] w-full"
                    sizes="(max-width: 1080px) 100vw, 1080px"
                    srcSet={`
                      /blog/${post.id}/post_img_sm.png 200w,
                      /blog/${post.id}/post_img_md.png 640w,
                      /blog/${post.id}/post_img_lg.png 889w,
                      /blog/${post.id}/post_img_xl.png 1071w,
                      /blog/${post.id}/post_img.png 1080w`}
                    src={`/blog/${post.id}/post_img.png`}
                    alt={post.title}></img>
                  <div className="p-4">
                    <h3 className={`${DINish.className} text-lg font-semibold mb-2`}>{post.title}</h3>
                    <p className={`text-sm ${DINish.className} text-gray-600`}>{post.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
