import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h3: ({ children }) => <h1 className="text-2xl font-medium tracking-normal text-edgeset">{children}</h1>,
    ul: ({ children }) => <ul style={{ listStyle: "decimal" }}>{children}</ul>,
    ...components,
  }
}