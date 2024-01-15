const Footer = () => (
  <footer className='grid grid-cols-18 bg-gray-300 pb-10'>
    <div className="col-span-16 col-start-2 m-auto w-full max-w-8xl">
      <svg role="img" width="120" height="100" aria-label="Tetmon logo" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg"><g fill="rgb(55, 65, 81)"><path d="m23 0-6.64 3.91 9.31 5.48-15.47 9.1v4.11l6 3.46v-3.7l16.1-9.43 6.57 3.95-.08 14.63 6.16-3.71.12-14.74zm22 39.57v-7.67l-9.47 5.18.1-17.95-3.47-2.13-6 3.37 3.17 1.9-.15 18.65-6.76 3.61-12.54-7.53v7.19l12.6 7.67zm-45-.79 6.69 3.76.08-10.81 15.63 8.84 3.56-2v-6.97l-3.21 1.86-16.21-9.22.13-7.66 12.7-7.25-6.29-3.48-12.83 7.27z" fillRule="evenodd"></path><path d="m75 19.45v17.37h-4.76v-17.37h-6.64v-4.45h18.07v4.43z"></path><path d="m85.49 36.82v-21.82h16.41v4.27h-11.68v4.42h10.28v4.31h-10.28v4.58h11.84v4.26z"></path><path d="m116.37 19.45v17.37h-4.79v-17.37h-6.64v-4.45h18.06v4.43z"></path><path d="m143.9 36.82v-14.23l-6.14 9.31h-.12l-6.08-9.22v14.14h-4.73v-21.82h5.17l5.73 9.22 5.73-9.22h5.17v21.8z"></path><path d="m175.34 30.3a11.13 11.13 0 0 1 -6.09 6 12.57 12.57 0 0 1 -9.29 0 11.4 11.4 0 0 1 -3.66-2.4 10.61 10.61 0 0 1 -2.4-3.55 11.2 11.2 0 0 1 -.9-4.35v-.07a11 11 0 0 1 .87-4.37 11.32 11.32 0 0 1 2.46-3.56 11.2 11.2 0 0 1 3.67-2.46 11.91 11.91 0 0 1 4.66-.89 11.77 11.77 0 0 1 8.3 3.28 10.76 10.76 0 0 1 2.4 3.56 11.17 11.17 0 0 1 .86 4.37v.06a11.05 11.05 0 0 1 -.88 4.38zm-4.14-4.38a7.27 7.27 0 0 0 -.48-2.64 6.56 6.56 0 0 0 -1.37-2.18 6.44 6.44 0 0 0 -2.11-1.48 6.24 6.24 0 0 0 -2.64-.55 6.59 6.59 0 0 0 -2.67.53 6.14 6.14 0 0 0 -2.05 1.46 7 7 0 0 0 -1.34 2.17 7.18 7.18 0 0 0 -.48 2.63v.06a7.29 7.29 0 0 0 .48 2.65 6.57 6.57 0 0 0 3.46 3.66 6.39 6.39 0 0 0 2.66.55 6.64 6.64 0 0 0 2.65-.53 6 6 0 0 0 2.07-1.47 6.83 6.83 0 0 0 1.34-2.16 7.18 7.18 0 0 0 .48-2.62z"></path><path d="m195.92 36.82-10.56-13.82v13.82h-4.73v-21.82h4.42l10.22 13.43v-13.43h4.73v21.8z"></path></g></svg>
      <ul className='mb-12 grid grid-cols-2 gap-4'>
        <li className='text-base font-normal text-gray-800'><a href="/get-demo">Request a Demo</a></li>
        {/* <li className='text-base font-normal text-gray-800'><a className='hover:underline' href="/case-studies">Case Studies</a></li> */}
        {/* <li className='text-base font-normal text-gray-800'><a href="/faq" className='hover:underline'>FAQ</a></li> */}
        <li className='text-base font-normal text-gray-800'><a href="/about" className='hover:underline'>About</a></li>
      </ul>
      <div className='mb-4 flex gap-4 text-gray-700'>
        <a href="https://www.linkedin.com/company/tetmon" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-label="LinkedIn Logo"><path d="M18.5714 0C18.9583 0 19.2857 0.14881 19.5536 0.446429C19.8512 0.714286 20 1.04167 20 1.42857V18.5714C20 18.9583 19.8512 19.2857 19.5536 19.5536C19.2857 19.8512 18.9583 20 18.5714 20H1.42857C1.04167 20 0.699405 19.8512 0.401786 19.5536C0.133929 19.2857 0 18.9583 0 18.5714V1.42857C0 1.04167 0.133929 0.714286 0.401786 0.446429C0.699405 0.14881 1.04167 0 1.42857 0H18.5714ZM6.02679 17.1429H6.07143V7.58929H3.08036V17.1429H6.02679ZM3.34821 5.80357C3.6756 6.13095 4.07738 6.29464 4.55357 6.29464C5.02976 6.29464 5.43155 6.13095 5.75893 5.80357C6.11607 5.44643 6.29464 5.04464 6.29464 4.59821C6.29464 4.12202 6.11607 3.72024 5.75893 3.39286C5.43155 3.03571 5.02976 2.85714 4.55357 2.85714C4.07738 2.85714 3.6756 3.03571 3.34821 3.39286C3.02083 3.72024 2.85714 4.12202 2.85714 4.59821C2.85714 5.04464 3.02083 5.44643 3.34821 5.80357ZM17.1429 17.1429V11.9196C17.1429 11.2054 17.0982 10.5952 17.0089 10.0893C16.9196 9.58333 16.756 9.12202 16.5179 8.70536C16.2798 8.25893 15.9077 7.93155 15.4018 7.72321C14.9256 7.48512 14.3304 7.36607 13.6161 7.36607C12.9315 7.36607 12.3363 7.51488 11.8304 7.8125C11.3542 8.11012 11.0119 8.46726 10.8036 8.88393H10.7589V7.58929H7.90179V17.1429H10.8929V12.4107C10.8929 11.6667 11.0119 11.0714 11.25 10.625C11.4881 10.1786 11.9494 9.95536 12.6339 9.95536C12.9911 9.95536 13.2887 10.0298 13.5268 10.1786C13.7649 10.3274 13.9137 10.5506 13.9732 10.8482C14.0625 11.1458 14.122 11.4137 14.1518 11.6518C14.1815 11.8601 14.1964 12.1429 14.1964 12.5V17.1429H17.1429Z" fill="currentColor"></path></svg>
        </a>
        {/* <a href="https://www.twitter.com/tetmon" aria-label="Twitter or X">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.7512 0.960938H18.818L12.1179 8.61866L20 19.0391H13.8284L8.99458 12.7192L3.46359 19.0391H0.394938L7.5613 10.8483L0 0.960938H6.32828L10.6976 6.7376L15.7512 0.960938ZM14.6748 17.2035H16.3742L5.4049 2.70015H3.58133L14.6748 17.2035Z" fill="currentColor"></path></svg>
        </a> */}
        <a href="https://www.github.com/tetmon" aria-label="Github">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor" /></svg>
        </a>
      </div>
      <div className='text-xs text-gray-600'>
        ©2024 Tetmon Pte Ltd - All Rights Reserved
      </div>
    </div>
  </footer>
)


export default Footer;