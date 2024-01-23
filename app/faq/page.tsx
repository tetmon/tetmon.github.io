import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const sources = [
  ['Alibaba OSS', 'N/A', 'requires an API key'],
  ['Amazon Redshift', 'any', ''],
  ['Amazon S3', 'N/A', 'requires an API key'],
  ['Apache Kafka', '0.10.0 or higher', 'unauthenticated only'],
  ['Google BigQuery', 'N/A', 'requires a Google Cloud service account'],
  ['Elasticsearch', '6.0.0 or higher', 'unauthenticated only'],
  ['MongoDB', '4.0 or higher', ''],
  ['MySQL', '5.7 or higher', ''],
  ['PostgresSQL', '10.0 or higher', ''],
  ['SQL Server', '2012 or higher or Azure SQL', '']
];

export default function faq() {
  return (
    <main>
      <Navbar />
      <section className="m-auto grid max-w-8xl grid-cols-18 px-5 py-8">
        <div className="col-span-full px-1 md:px-6 lg:px-8">
          <div className="flex w-full items-center border-b pb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#215f74" data-name="Layer 1" viewBox="0 -10 100 125" className="h-6 w-6 md:h-7 md:w-7"><path d="M50,2A48,48,0,1,0,98,50,48,48,0,0,0,50,2Zm6,82.5H44v-12H56Zm3.21-27.62A6.35,6.35,0,0,0,56,62.7v.8H44v-.8a18.39,18.39,0,0,1,9.94-16.6A9,9,0,0,0,59,38a9.24,9.24,0,0,0-9-9,9,9,0,0,0-9,9H29A21,21,0,0,1,50,17,21.28,21.28,0,0,1,71,38,20.87,20.87,0,0,1,59.21,56.88Z" /></svg>
            <h2 className='pl-1 text-xl font-medium tracking-tight text-edgeset md:text-2xl md:leading-11'>EdgeSet FAQ</h2>
          </div>
          <h1 className='py-8 text-3xl font-medium md:text-4xl md:leading-11'>Business Questions</h1>
          <p className="pb-5">
            <strong>What is Edgeset?</strong>
          </p>
          <p>
            EdgeSet is a data integration software product that joins up disparate cloud and on-premise data sources to a single access point, within minutes. It is an alternative to and complement to traditional data warehouses and data lakes.
          </p>

          <p className="py-5">
            <strong>Is Edgeset a cloud solution?</strong>
          </p>
          <p>
            Edgeset can be deployed on desktop, as self-hosted/ on-premise, or managed hosting.
          </p>

          <p className="py-5">
            <strong>I don’t want to reveal my data to anyone outside my company. How does EdgeSet enable this?</strong>
          </p>

          <p>Since EdgeSet is not a SaaS, Tetmon has no access to the data you add to EdgeSet. Only users you create and grant access to can view your data.</p>
          <p className="py-5">
            <strong>What kind of cyber security protection measures are in place?</strong>
          </p>
          <p>
            EdgeSet is protected by a firewall. All network traffic is encrypted. All Edgeset software dependencies are tracked and verified against trusted SHA256 hashes to mitigate third-party vulnerability injections. We regularly review and incorporate upstream security fixes.

            How will my system information be stored?
            All data source credentials are stored encrypted (256-bit key, symmetric encryption). They are decrypted and held in memory only when in use and are automatically scrubbed when they go out of scope. They are never written to disk unencrypted and they are never shared with Tetmon.
          </p>

          <p className="py-5">
            <strong>What kind of visualizations are possible on EdgeSet?</strong>
          </p>
          <p>
            There are many types of visualizations built into EdgeSet including but not limited to: Charts (Line, Bar, Pie, Area, Scatter plot, Box, Heatmap, etc), Maps (Choropleth, Markers), Pivot Tables, Word Cloud, etc.
          </p>

          <h1 className="py-8 pt-12 text-3xl font-medium md:text-4xl md:leading-11">Technical Questions</h1>

          <p className="pb-5"><strong>Do I need to learn a new SQL dialect to be able to use EdgeSet? How do I write queries for different databases with different SQL dialects?</strong></p>
          <p>
            Edgeset, through its embedded Trino engine, understands standard ANSI SQL. The Trino engine will translate ANSI SQL into the native language of the data sources it’s connected to.
          </p>

          <p className="py-5"><strong>Can EdgeSet connect to live data?</strong></p>
          <p>
            Yes, as long as the data is in a tabular format, in a currently supported data source. CSV/flat files are also supported. The table below shows some of the supported sources EdgeSet can ingest.
          </p>
          <p className="py-3 pt-5">
            <strong className="my-4 text-lg">Supported Data Source Versions</strong>
          </p>
          <div className="w-full overflow-auto">
            <table className="mt-2 w-full max-w-6xl table-auto border-collapse border text-sm">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border-b p-4 pb-3 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200 md:pl-8">Data Source</th>
                  <th className="border-b p-4 pb-3 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200 md:pl-8">Versions</th>
                  <th className="border-b p-4 pb-3 text-left font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-200 md:pl-8">Notes</th>
                </tr>
              </thead>
              <tbody>
                {
                  sources.map((source, index) => {
                    return (
                      <tr key={index}>
                        <td className="border-b border-slate-100 p-4 text-slate-800 dark:border-slate-700 dark:text-slate-400 md:pl-8">{source[0]}</td>
                        <td className="border-b border-slate-100 p-4 text-slate-800 dark:border-slate-700 dark:text-slate-400 md:pl-8">{source[1]}</td>
                        <td className="border-b border-slate-100 p-4 text-slate-800 dark:border-slate-700 dark:text-slate-400 md:pl-8">{source[2]}</td>
                      </tr>)
                  })
                }
              </tbody>
            </table>
          </div>

          <p className="py-5"><strong>How does Edgeset create a virtual data warehouse?</strong></p>
          Once the user has added their data sources to Edgeset, Edgeset will then use its auto inference feature to build the structure of the virtual data warehouse. With the structure built, users can now query the data warehouse with SQL queries.

          <p className="py-5"><strong>What happens to the information/data once the desired reports have been generated? Is it stored? If so, where is it stored?</strong></p>

          Only query results used by visualizations are cached in EdgeSet. The age of the results are displayed and they can be refreshed from the dashboards that they appear in.
          The underlying data is not stored.

          <p className="py-5">
            <strong>Does EdgeSet support Common Table Expressions (CTEs)?</strong>
          </p>
          Yes.

        </div>
      </section>
      <Footer />
    </main>
  )
}