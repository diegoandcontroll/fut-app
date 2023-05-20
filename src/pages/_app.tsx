import { Navbar } from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400',  '600'],
  variable: '--font-poppins',
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <AppProvider> */}
     <main className={`w-full h-screen bg-gradient-to-tl from-indigo-900 to-slate-950 ${poppins.variable} font-sans`}>
      <Navbar />
       <Component {...pageProps} />
     </main>
     {/* </AppProvider> */}
    </>
  )
}