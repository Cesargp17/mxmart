
import { LanguageProvider } from '@/context/LanguageProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}
