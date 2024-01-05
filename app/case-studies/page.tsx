import Image from "next/image";

const studies = [
  {
    title: 'How we created our own CRM with just EdgeSet and google sheets.',
    description: 'No need to grapple with, and pay for, painful CRM/ERP like Salesforce.',
    link: 'case-studies/sales',
    file: 'casestudies/crm/legos.png',
    width: 400,
    height: 300
  },
  {
    title: 'From data integration to business decisions.',
    description: 'How SPD Jobs drastically shortened the time taken to analyze their data.',
    link: 'case-studies/spd',
    file: 'companies/spd-empty.png',
    width: 100,
    height: 100
  }
]

export default function CaseStudies() {
  return (
    <section className="m-auto grid max-w-8xl grid-cols-18 py-8">
      <div className='col-span-16 col-start-2 pt-12'>
        <div className="flex max-w-xl flex-col">
          <div className="flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" version="1.1" x="0px" y="0px" viewBox="30 25 50 50"><path d="M70,35H57v-3c0-0.6-0.4-1-1-1H44c-0.6,0-1,0.4-1,1v3H30c-1.1,0-2,0.9-2,2v14h18v-3c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v3h18  V37C72,35.9,71.1,35,70,35z M45,35v-2h10v2H45z M52,49v6h-4v-6H52z M54,53h18v10c0,1.1-0.9,2-2,2H30c-1.1,0-2-0.9-2-2V53h18v3  c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1V53z" fill="#215f74" /></svg>
            <h1 className="pl-1 text-3xl font-medium leading-11 text-edgeset lg:text-4xl">Case Studies</h1>
          </div>
          <p className="col-span-6 col-start-1 py-6">
            Edgeset is in early stages of development. We are working with few companies to help them get the most out of their data. We will be publishing more case studies soon.
          </p>
          <p>
            Meanwhile, on this page, we&apos;ve compiled some of the most helpful case studies for you.
          </p>
        </div>
      </div>
      <div className='col-span-16 col-start-2 max-w-8xl py-16'>
        <div className='grid max-w-fit grid-cols-1 gap-12 rounded-md md:grid-cols-2'>
          {
            studies.map((item) => (
              <a href={item.link} key={item.link}>
                <div key={item.title} className='flex max-w-sm flex-col border bg-white hover:bg-slate-50 hover:shadow-md'>
                  <div className='flex h-64 w-full items-center justify-center overflow-hidden rounded-sm bg-gray-300'>
                    <Image src={item.file} alt={item.title} objectFit='cover' width={item.width} height={item.height} />
                  </div>
                  <div className='my-4 px-3 text-lg font-medium tracking-normal text-edgeset' dangerouslySetInnerHTML={{ __html: item.title }}></div>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  );
}