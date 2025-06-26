import './studio.css'
import localFont from 'next/font/local'

const GerstnerText = localFont({
  src: [
    {
      path: '../../fonts/GerstnerProgrammFSL-Bold.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../fonts/GerstnerProgrammFSL-Italic.woff',
      weight: '400',
      style: 'italic'
    }
  ],
  display: 'swap',
  variable: '--font-gerstner-text'
})

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GerstnerText.variable}`}>
        {children}
      </body>
    </html>
  );
}
