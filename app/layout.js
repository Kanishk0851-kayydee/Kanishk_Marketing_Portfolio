import './globals.css'

export const metadata = {
  title: 'Kanishk Dawar | Portfolio Dashboard',
  description: 'Brand Strategist & Growth Marketing Professional Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
