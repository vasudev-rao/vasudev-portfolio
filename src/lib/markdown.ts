/**
 * Markdown → HTML with VS Code-style code blocks
 * No external deps — pure regex-based syntax highlighting
 */

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ── Minimal syntax highlighter ─────────────────────────────────────────────
function highlight(code: string, lang: string): string {
  const e = escapeHtml(code);

  if (lang === "python" || lang === "py") {
    return e
      // strings (double/single)
      .replace(/("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, '<span class="sh-str">$1</span>')
      // comments
      .replace(/(#.*)$/gm, '<span class="sh-cmt">$1</span>')
      // keywords
      .replace(/\b(def|class|return|import|from|as|if|elif|else|for|while|in|not|and|or|is|None|True|False|try|except|finally|with|yield|lambda|pass|break|continue|raise|assert|global|nonlocal|del|async|await)\b/g, '<span class="sh-kw">$1</span>')
      // builtins / types
      .replace(/\b(print|len|range|list|dict|set|tuple|str|int|float|bool|type|isinstance|enumerate|zip|map|filter|sorted|reversed|open|super|self)\b/g, '<span class="sh-builtin">$1</span>')
      // decorators
      .replace(/(@\w+)/g, '<span class="sh-dec">$1</span>')
      // numbers
      .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="sh-num">$1</span>')
      // function calls
      .replace(/(\w+)(?=\()/g, '<span class="sh-fn">$1</span>');
  }

  if (lang === "sql") {
    return e
      .replace(/(--.*$)/gm, '<span class="sh-cmt">$1</span>')
      .replace(/('(?:[^'\\]|\\.)*')/g, '<span class="sh-str">$1</span>')
      .replace(/\b(SELECT|FROM|WHERE|JOIN|LEFT|RIGHT|INNER|OUTER|ON|GROUP BY|ORDER BY|HAVING|LIMIT|OFFSET|AS|AND|OR|NOT|IN|EXISTS|UNION|ALL|DISTINCT|CREATE|TABLE|INSERT|UPDATE|DELETE|DROP|ALTER|WITH|PARTITION|BY|OVER|WINDOW|RANK|ROW_NUMBER|CASE|WHEN|THEN|ELSE|END|NULL|IS|COUNT|SUM|AVG|MIN|MAX|COALESCE|CAST|EXTRACT)\b/gi, '<span class="sh-kw">$1</span>')
      .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="sh-num">$1</span>');
  }

  if (lang === "bash" || lang === "sh" || lang === "shell") {
    return e
      .replace(/(#.*$)/gm, '<span class="sh-cmt">$1</span>')
      .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g, '<span class="sh-str">$1</span>')
      .replace(/\b(if|then|else|fi|for|do|done|while|case|esac|function|return|export|source|echo|cd|ls|mkdir|rm|cp|mv|cat|grep|awk|sed|curl|wget|git|npm|pip|python|python3|docker|kubectl)\b/g, '<span class="sh-kw">$1</span>')
      .replace(/(\$\w+|\$\{[^}]+\})/g, '<span class="sh-var">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="sh-num">$1</span>');
  }

  if (lang === "yaml" || lang === "yml") {
    return e
      .replace(/(#.*$)/gm, '<span class="sh-cmt">$1</span>')
      .replace(/^(\s*[\w-]+):/gm, '<span class="sh-key">$1</span>:')
      .replace(/(:\s*)(true|false|null|~)/gm, '$1<span class="sh-kw">$2</span>')
      .replace(/(:\s*)([0-9]+(?:\.[0-9]+)?)\b/gm, '$1<span class="sh-num">$2</span>')
      .replace(/(:\s*)(["'].*["'])/gm, '$1<span class="sh-str">$2</span>');
  }

  if (lang === "json") {
    return e
      .replace(/("(?:[^"\\]|\\.)*")\s*:/g, '<span class="sh-key">$1</span>:')
      .replace(/:\s*("(?:[^"\\]|\\.)*")/g, ': <span class="sh-str">$1</span>')
      .replace(/\b(true|false|null)\b/g, '<span class="sh-kw">$1</span>')
      .replace(/\b(\d+(?:\.\d+)?)\b/g, '<span class="sh-num">$1</span>');
  }

  // Scala, Java, JS, TS generic
  if (["scala","java","javascript","js","typescript","ts"].includes(lang)) {
    return e
      .replace(/(\/\/.*$)/gm, '<span class="sh-cmt">$1</span>')
      .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="sh-cmt">$1</span>')
      .replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, '<span class="sh-str">$1</span>')
      .replace(/\b(val|var|def|class|object|trait|import|package|extends|with|override|case|match|if|else|for|while|return|new|this|super|null|true|false|const|let|function|async|await|export|default|interface|type|enum|implements|abstract|static|public|private|protected|void|int|string|boolean|number|String|Boolean|Integer|Long|Double)\b/g, '<span class="sh-kw">$1</span>')
      .replace(/(\w+)(?=\()/g, '<span class="sh-fn">$1</span>')
      .replace(/\b(\d+(?:\.\d+)?(?:L|f|d)?)\b/g, '<span class="sh-num">$1</span>');
  }

  return e;
}

// ── Add line numbers ────────────────────────────────────────────────────────
function addLineNumbers(html: string): string {
  const lines = html.split("\n");
  // Remove trailing empty line
  if (lines[lines.length - 1] === "") lines.pop();
  return lines
    .map((line, i) => `<span class="sh-line"><span class="sh-ln">${i + 1}</span>${line}</span>`)
    .join("\n");
}

// ── Detect language label ───────────────────────────────────────────────────
const LANG_LABELS: Record<string, string> = {
  python: "Python", py: "Python",
  sql: "SQL",
  bash: "Bash", sh: "Shell", shell: "Shell",
  yaml: "YAML", yml: "YAML",
  json: "JSON",
  scala: "Scala",
  java: "Java",
  javascript: "JavaScript", js: "JavaScript",
  typescript: "TypeScript", ts: "TypeScript",
  text: "Text", plaintext: "Text",
};

// ── Code block renderer ─────────────────────────────────────────────────────
function renderCodeBlock(code: string, lang: string): string {
  const raw = code.trim();
  const label = LANG_LABELS[lang] ?? (lang ? lang.toUpperCase() : "Code");
  const highlighted = highlight(raw, lang);
  const withLines = addLineNumbers(highlighted);
  // Encode for data attribute (used by copy button)
  const encoded = encodeURIComponent(raw);

  return `<div class="code-block" data-code="${encoded}">
  <div class="code-header">
    <div class="code-dots">
      <span class="dot dot-red"></span>
      <span class="dot dot-yellow"></span>
      <span class="dot dot-green"></span>
    </div>
    <span class="code-lang">${label}</span>
    <button class="copy-btn" onclick="(function(btn){var code=decodeURIComponent(btn.closest('.code-block').dataset.code);navigator.clipboard.writeText(code).then(function(){btn.textContent='Copied!';btn.classList.add('copied');setTimeout(function(){btn.textContent='Copy';btn.classList.remove('copied')},2000)});})(this)">Copy</button>
  </div>
  <div class="code-body">
    <pre class="code-pre"><code class="code-inner">${withLines}</code></pre>
  </div>
</div>`;
}

// ── Main markdown → HTML ────────────────────────────────────────────────────
export function renderMarkdown(md: string): string {
  // 1. Fenced code blocks (must go first before other transforms)
  let html = md.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    return renderCodeBlock(code, lang.toLowerCase());
  });

  // 2. Headings
  html = html
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^### (.+)$/gm,  '<h3>$1</h3>')
    .replace(/^## (.+)$/gm,   '<h2>$1</h2>')
    .replace(/^# (.+)$/gm,    '<h1>$1</h1>');

  // 3. Bold / italic
  html = html
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');

  // 4. Inline code (must come after bold)
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

  // 5. Unordered lists
  html = html.replace(/((?:^- .+\n?)+)/gm, (block) => {
    const items = block.trim().split("\n").map((l) => `<li>${l.replace(/^- /, "")}</li>`).join("");
    return `<ul>${items}</ul>`;
  });

  // 6. Ordered lists
  html = html.replace(/((?:^\d+\. .+\n?)+)/gm, (block) => {
    const items = block.trim().split("\n").map((l) => `<li>${l.replace(/^\d+\. /, "")}</li>`).join("");
    return `<ol>${items}</ol>`;
  });

  // 7. Blockquote
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

  // 8. Horizontal rule
  html = html.replace(/^---$/gm, '<hr>');

  // 9. Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // 10. Paragraphs — wrap bare text blocks
  html = html.replace(/^(?!<[a-zA-Z/]|$)(.+)$/gm, '<p>$1</p>');

  // 11. Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '').replace(/<p>\s*<\/p>/g, '');

  return html;
}
