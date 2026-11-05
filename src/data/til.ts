export type Note = {
  date: string
  title: string
  body: string
}

export const notes: Note[] = [
  {
    date: '2026-10-20',
    title: 'Wrap Go errors with %w',
    body: 'Use fmt.Errorf("loading report: %w", err) so callers can still inspect the original error with errors.Is/As. A bare %v throws that information away.',
  },
  {
    date: '2026-09-30',
    title: 'color-scheme does the boring part',
    body: 'Setting color-scheme: light dark on :root makes native form controls, scrollbars, and the canvas follow the user preference. You still need to style the rest, but it removes the ugly default mismatches.',
  },
  {
    date: '2026-09-12',
    title: 'Prefer CSS variables over prop drilling',
    body: 'For theme values, a small set of semantic CSS variables (background, text, border) goes further than passing colors through components. One media query flips the whole site.',
  },
  {
    date: '2026-08-27',
    title: 'Test the empty state first',
    body: 'If a list, dashboard, or report is not useful with zero rows, it is not useful with one thousand. Designing the empty state early exposes missing copy and unclear actions.',
  },
  {
    date: '2026-08-05',
    title: 'Use tabular numbers for metrics',
    body: 'font-variant-numeric: tabular-nums keeps numbers from shifting width when they update. It is a one-line fix for dashboards that feel unstable.',
  },
]
