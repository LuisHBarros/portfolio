import { marked, Tokens } from 'marked'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function highlightCode(raw: string): string {
  // Escapamos o HTML primeiro
  const escaped = escapeHtml(raw)

  // Aplica keywords primeiro (antes de inserir spans)
  let result = escaped.replace(
    /\b(public|private|interface|void|new|return|implements|SELECT|INSERT|INTO|FROM|WHERE|JOIN|ON|BEGIN|COMMIT|FOR|IN|LOOP|END|PARTITION|ORDER|BY|ROWS|BETWEEN|AND|true|false|VALUES|byte)\b/g,
    match => `<span class="kw">${match}</span>`
  )

  // Strings (aspas simples escapadas como &#39;)
  result = result.replace(/&#39;[^&#]*&#39;/g, match => `<span class="str">${match}</span>`)
  result = result.replace(/&quot;[^&]*&quot;/g, match => `<span class="str">${match}</span>`)

  // Comentários de linha (// e --)
  result = result.replace(/\/\/ .+/g, match => `<span class="cm">${match}</span>`)
  result = result.replace(/-- .+/g, match => `<span class="cm">${match}</span>`)

  return result
}

// Customiza renderer para o estilo terminal
marked.use({
  renderer: {
    code({ text }: Tokens.Code): string {
      return `<pre><code>${highlightCode(text)}</code></pre>`
    },

    blockquote({ tokens }: Tokens.Blockquote): string {
      const body = this.parser.parse(tokens)
      return `<div class="callout">${body}</div>`
    },

    heading({ tokens }: Tokens.Heading): string {
      const text = this.parser.parseInline(tokens)
      return `<h4>${text}</h4>`
    },
  },
})

export function parseMarkdown(content: string): string {
  return marked(content) as string
}
