import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'


export default function Home() {
  return (
    <>
      <Head>
        <title>LinassiNX - Demo Site</title>
        <meta
          name="description"
          content="Example Next.JS site to test deployment."
        />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
