import type { MDXComponents as MDXComponentsType } from 'mdx/types'

export const MDXComponents: MDXComponentsType = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold dark:text-white text-gray-900 mt-10 mb-4 leading-tight tracking-tight">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="text-2xl font-bold dark:text-white text-gray-900 mt-8 mb-3 leading-tight pb-2 border-b dark:border-white/[0.07] border-black/[0.07]">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="text-lg font-semibold dark:text-white text-gray-900 mt-6 mb-2">
      {children}
    </h3>
  ),

  p: ({ children }) => (
    <p className="dark:text-gray-400 text-gray-500 leading-relaxed mb-4">
      {children}
    </p>
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2 transition-colors"
    >
      {children}
    </a>
  ),

  ul: ({ children }) => (
    <ul className="list-disc list-inside dark:text-gray-400 text-gray-500 space-y-1.5 mb-4 pl-2">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="list-decimal list-inside dark:text-gray-400 text-gray-500 space-y-1.5 mb-4 pl-2">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="dark:text-gray-400 text-gray-500 leading-relaxed">
      {children}
    </li>
  ),

  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-blue-500/50 pl-4 my-4 dark:text-gray-500 text-gray-400 italic">
      {children}
    </blockquote>
  ),

  code: ({ children }) => (
    <code className="px-1.5 py-0.5 rounded dark:bg-white/[0.06] bg-black/[0.06] dark:border-white/[0.08] border-black/[0.08] border text-blue-500 dark:text-blue-300 text-[0.85em] font-mono">
      {children}
    </code>
  ),

  pre: ({ children }) => (
    <pre className="my-5 p-5 rounded-xl bg-[#0d1117] border border-white/[0.07] overflow-x-auto text-sm font-mono text-gray-300 leading-relaxed">
      {children}
    </pre>
  ),

  hr: () => (
    <hr className="my-8 dark:border-white/[0.07] border-black/[0.07]" />
  ),

  strong: ({ children }) => (
    <strong className="font-semibold dark:text-white text-gray-900">
      {children}
    </strong>
  ),

  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm text-left dark:text-gray-400 text-gray-500 border dark:border-white/[0.07] border-black/[0.07] rounded-xl overflow-hidden">
        {children}
      </table>
    </div>
  ),

  th: ({ children }) => (
    <th className="px-4 py-3 text-xs font-semibold dark:text-gray-300 text-gray-600 uppercase tracking-wider dark:bg-white/[0.04] bg-black/[0.04] border-b dark:border-white/[0.07] border-black/[0.07]">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="px-4 py-3 border-b dark:border-white/[0.04] border-black/[0.04]">
      {children}
    </td>
  ),
}