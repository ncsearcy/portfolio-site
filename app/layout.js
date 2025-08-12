import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './lib/theme'
import './globals.css'

export const metadata = {
  title: 'Nicholas Searcy',
  description: 'Full-stack developer portfolio showcasing modern web development projects',
  keywords: 'developer, portfolio, React, Next.js, web development',
  authors: [{ name: 'Nicholas Searcy' }],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </body>
    </html>
  )
}