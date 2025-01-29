'use client'

import React, { useEffect, useState } from 'react'

const PageNavigator: React.FC = () => {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([])
  const [activeHeading, setActiveHeading] = useState<string | null>(null)

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll('h2'))
    setHeadings(headingElements as HTMLHeadingElement[])

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -66% 0px' }
    )

    headingElements.forEach((heading) => observer.observe(heading))

    // detect scroll to bottom
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        setActiveHeading(headingElements[headingElements.length - 1].id)
      }
    });

    if (headingElements.length > 0) {
      // on page load, set active heading to the first heading
      setActiveHeading(headingElements[0].id);
    }

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden xl:block top-32 w-64 overflow-auto fixed right-0">
      <ul className="space-y-2 bg-gray-100">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`
                 block py-1 px-4 text-sm
                relative
                before:content-['']
                before:absolute before:left-0 before:inset-y-0 before:w-1
                before:transition-colors before:duration-100 before:ease-in-out
                ${activeHeading === heading.id
                  ? 'font-bold text-primary before:bg-primary'
                  : 'text-gray-600 hover:text-blue-600 before:bg-transparent'
                }
                `}
              style={{
                marginLeft: `${(heading.tagName === 'H3' ? 1 : 0) * 1}rem`,
              }}
            >
              {heading.textContent}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PageNavigator