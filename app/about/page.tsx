import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { DINish } from "../fonts";

const headlines = [
  'Tetmon represented Singapore to Chongqing Tech Unicorn summit, and regularly speak at corporate innovation workshops.',
  'We partner with some of the world’s top technology firms.',
  'Tool of choice by top funds, financial institutions, government-linked corporations, and more.'
];

const members = [
  {
    name: 'Christopher Forno',
    title: 'Co-founder',
    description: `
    For two decades, Chris has built and led global software engineering teams to execute projects ranging from large distributed systems to computer vision. He has extensive experience in DevOps, cybersecurity, and full-stack development.
    <br/>  <br/>
Previous employers and clients have include top California tech companies, the private equity fund Yucaipa Companies, and more recently in Asia, Global Fashion Group and Lazada. Chris has written popular articles on a number of themes, his GitHub projects have 500 stars and 100 forks, and his YouTube programming tutorials have been viewed over half a million times.
    `,
    file: 'about/christopher.jpg'
  },
  {
    name: 'Yinghan Hu',
    title: 'Co-founder',
    description: `
    Yinghan started his career at GIC before holding management and strategy roles at government-linked corporations. He currently volunteers with 10x1000, a global philanthropic joint initiative by International Finance Corporation (IFC) and Ant Financial.
    <br/>  <br/>
    Yinghan graduated from Oxford University with a BA and MA in Jurisprudence.
    `,
    file: 'about/hu-yinghan.jpg'
  }
]

export default function about(props: any) {
  return (
    <main>
      <Navbar />
      <section className='grid grid-cols-18 pt-14 md:pt-24'>
        <div className="col-span-full px-6 md:px-10 lg:px-14 xl:px-56">
          <h1 className={`${DINish.className} text-4xl font-semibold leading-11 md:text-center lg:text-5xl`}>EdgeSet is trusted by Industry Leaders</h1>
          <p className={`${DINish.className} max-w-3xl py-8 text-left text-base leading-7 text-gray-600  md:m-auto md:text-center md:text-lg`}>
            Tetmon’s EdgeSet eliminates the need for ETL or a traditional data warehouse. EdgeSet create a virtual representation of all your data centrally, then fetches the data from the edges when you require it.
          </p>
          <div className="grid grid-rows-3 items-center gap-6 py-6 md:grid-cols-3 md:grid-rows-none md:items-baseline md:gap-16 md:py-12">
            {
              headlines.map((headline, index) => {
                return (
                  <div key={index} className={`${DINish.className} font-medium`}>{headline}</div>
                )
              })
            }
          </div>
          <div className="grid gap-10 py-8 md:grid-cols-3 md:gap-16">
            {
              members.map((member, index) => {
                return (
                  <div key={index}>
                    <Image src={member.file} alt={member.name} width={100} height={100} className="grayscale" />
                    <h3 className={`${DINish.className} pt-4 text-xl font-medium tracking-tight`}>{member.name}</h3>
                    <p className={`${DINish.className} text-sm font-medium tracking-tight`}>{member.title}</p>
                    <div className={`${DINish.className} py-5`} dangerouslySetInnerHTML={{ __html: member.description }}></div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
