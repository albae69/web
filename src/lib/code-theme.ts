import type { PrismTheme } from 'prism-react-renderer'

// GitHub Dark theme colors
export const githubDarkTheme: PrismTheme = {
  plain: {
    color: '#e1e4e8',
    backgroundColor: '#0d1117',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#8b949e',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#c9d1d9',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
      style: {
        color: '#79c0ff',
      },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin'],
      style: {
        color: '#a5d6ff',
      },
    },
    {
      types: ['operator', 'entity', 'url'],
      style: {
        color: '#d2a8ff',
      },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: '#ff7b72',
      },
    },
    {
      types: ['function', 'class-name'],
      style: {
        color: '#d2a8ff',
      },
    },
    {
      types: ['regex', 'important', 'variable'],
      style: {
        color: '#ffa657',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: '#ffa198',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: '#7ee787',
      },
    },
  ],
}

// GitHub Light theme colors
export const githubLightTheme: PrismTheme = {
  plain: {
    color: '#24292f',
    backgroundColor: '#f6f8fa',
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#6e7781',
        fontStyle: 'italic',
      },
    },
    {
      types: ['punctuation'],
      style: {
        color: '#24292f',
      },
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
      style: {
        color: '#0550ae',
      },
    },
    {
      types: ['selector', 'attr-name', 'string', 'char', 'builtin'],
      style: {
        color: '#0a3069',
      },
    },
    {
      types: ['operator', 'entity', 'url'],
      style: {
        color: '#953800',
      },
    },
    {
      types: ['atrule', 'attr-value', 'keyword'],
      style: {
        color: '#cf222e',
      },
    },
    {
      types: ['function', 'class-name'],
      style: {
        color: '#8250df',
      },
    },
    {
      types: ['regex', 'important', 'variable'],
      style: {
        color: '#953800',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: '#cf222e',
      },
    },
    {
      types: ['inserted'],
      style: {
        color: '#116329',
      },
    },
  ],
}
