import RequestDemo from "@/app/requestDemo";

const Discover = ({ inline }: { inline?: boolean }) => (
  <section className={`grid grid-cols-18 ${inline ? 'mt-8' : ''}`}>
    <div className={`${!inline ? 'col-span-16 col-start-2' : 'col-span-full col-start-1'}`}>
      <div className={`relative ${inline ? 'top-0' : 'top-6'} m-auto flex h-[400px] max-w-8xl flex-col items-center justify-center rounded-md bg-edgeset px-6 text-center`}>
        <h1 className={`mb-7 ${inline ? 'text-lg leading-11 md:text-3xl' : 'text-3xl leading-11 md:text-4xl'} font-medium text-white`}>Discover the power of visualizing your business.</h1>
        <RequestDemo size='lg' outline />
      </div>
    </div>
    {!inline ? <div className='col-span-full mt-[-144px] h-48 bg-gray-300'>
    </div> : null}
  </section>
)

export default Discover;