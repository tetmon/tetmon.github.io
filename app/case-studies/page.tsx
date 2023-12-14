const studies = [
  {
    title: 'From data integration to business decisions.',
    description: 'How SPD Jobs drastically shortened the time taken to analyze their data.',
    link: '/case-studies/spd'
  },
  {
    title: 'How we created our own CRM with just EdgeSet and google sheets.',
    description: 'No need to grapple with, and pay for, painful CRM/ ERP like Salesforce.',
    link: '/case-studies/sales'
  }
]

export default function CaseStudies() {
  return (
    <section className="m-auto grid max-w-8xl grid-cols-18 py-8">
      <div className='col-span-16 col-start-2 pt-12'>
        <div className="flex max-w-xl flex-col">
          <h1 className="text-4xl font-medium leading-11 text-edgeset lg:text-5xl">Case Studies</h1>
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
                <div key={item.title} className='flex max-w-sm flex-col border bg-white'>
                  <div className='h-64 w-full rounded-sm bg-gray-300'>
                  </div>
                  <div className='my-4 px-4 font-medium text-gray-700' dangerouslySetInnerHTML={{ __html: item.description }}></div>
                </div>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  );
}