import { AppLocaleProvider } from '@/context/AppLocaleProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AppLocaleProvider>
      <Component {...pageProps} />
    </AppLocaleProvider>
  )
}
