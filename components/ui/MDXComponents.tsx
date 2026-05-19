import type { MDXComponents as MDXComponentsType } from 'mdx/types'
export const MDXComponents: MDXComponentsType = {
    h1: ({ children }) => (
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-12 mb-6 leading-tight tracking-tight">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-4 pb-3 border-b border-black/[0.08] dark:border-white/[0.08]">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-3">
      {children}
    </h3>
  ),

  p: ({ children }) => (
    <p className="text-gray-700 dark:text-gray-300 leading-8 mb-6 text-[17px]">
      {children}
    </p>
  ),

  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        text-blue-600
        dark:text-blue-400

        hover:text-blue-500
        dark:hover:text-blue-300

        underline
        underline-offset-4
        transition-colors
      "
    >
      {children}
    </a>
  ),

  ul: ({ children }) => (
    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
      {children}
    </ul>
  ),

  ol: ({ children }) => (
    <ol className="list-decimal pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
      {children}
    </ol>
  ),

  li: ({ children }) => (
    <li className="leading-7">
      {children}
    </li>
  ),

  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-blue-500 pl-5 italic text-gray-500 dark:text-gray-400 my-6">
      {children}
    </blockquote>
  ),

  code: ({ className, children }) => {
    if (className) {
      return (
        <code className={className}>
          {children}
        </code>
      )
    }

    return (
      <code
        className="
          px-1.5 py-1
          rounded-md
          font-mono
          text-[0.85em]

          bg-black/[0.05]
          dark:bg-white/[0.06]

          border
          border-black/[0.08]
          dark:border-white/[0.08]

          text-blue-600
          dark:text-blue-300
        "
      >
        {children}
      </code>
    )
  },

  pre: ({ children }) => (
    <div
      className="
        my-8
        overflow-hidden
        rounded-2xl
        border

        border-black/[0.08]
        dark:border-white/[0.08]

        bg-[#f8fafc]
        dark:bg-[#0b1120]

        shadow-lg
        dark:shadow-2xl
      "
    >

      {/* Top Bar */}
      <div
        className="
          flex items-center justify-between
          px-4 py-3

          border-b

          border-black/[0.06]
          dark:border-white/[0.06]

          bg-black/[0.03]
          dark:bg-white/[0.03]
        "
      >

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>

        <span
          className="
            text-[11px]
            uppercase
            tracking-widest
            font-medium

            text-gray-500
            dark:text-gray-400
          "
        >
          code
        </span>
      </div>

      {/* Code Content */}
      <pre
        className="
          overflow-x-auto
          p-5
          text-[15px]
          leading-8

          text-gray-800
          dark:text-gray-200

          bg-transparent
        "
      >
        {children}
      </pre>
    </div>
  ),

  hr: () => (
    <hr className="my-10 border-black/[0.08] dark:border-white/[0.08]" />
  ),

  strong: ({ children }) => (
    <strong className="font-semibold text-gray-900 dark:text-white">
      {children}
    </strong>
  ),

  table: ({ children }) => (
    <div className="overflow-x-auto my-8 rounded-2xl border border-black/[0.08] dark:border-white/[0.08]">
      <table className="w-full text-sm text-left border-collapse">
        {children}
      </table>
    </div>
  ),

  th: ({ children }) => (
    <th
      className="
        px-5 py-4
        text-xs
        uppercase
        tracking-wider
        font-semibold

        bg-black/[0.03]
        dark:bg-white/[0.04]

        text-gray-700
        dark:text-gray-300

        border-b
        border-black/[0.08]
        dark:border-white/[0.08]
      "
    >
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td
      className="
        px-5 py-4

        text-gray-700
        dark:text-gray-300

        border-b
        border-black/[0.05]
        dark:border-white/[0.05]
      "
    >
      {children}
    </td>
  ),
}