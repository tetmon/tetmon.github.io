import { DINish } from "./fonts";

export default function Platform() {
  return (
    <section className="relative bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center p-10">
          <div className="flex">
            <h2 className={`text-4xl font-bold text-zinc-100 ${DINish.className} pl-2`}>Platform</h2>
          </div>
          <p className={`${DINish.className} pt-2 text-xl text-zinc-100`}>Leverage your data without disrupting your existing workflows.</p>
        </div>
        <div>

        </div>
        {/* <div className="grid grid-cols-12 grid-rows-[420px_420px]">
          <div className="col-span-6 col-start-2">
            <h2 className={`text-4xl font-bold ${DINish.className}`}>Single point of access</h2>
          </div>
          <div className="col-span-12 col-start-9">
            <h2 className={`text-4xl font-bold ${DINish.className}`}>Compare and analyze</h2>
          </div>
          <div className="col-span-6 col-start-2">
            <h2 className={`text-4xl font-bold ${DINish.className}`}>Dashboard</h2>
          </div>
          <div className="col-span-12 col-start-9">
            <h2 className={`text-4xl font-bold ${DINish.className}`}>Reports and Insights</h2>
          </div>
        </div> */}
      </div>
    </section >
  );
}