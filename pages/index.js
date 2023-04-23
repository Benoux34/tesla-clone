import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tesla Clone</title>
        <meta name="description" content="Antunes Benoit - Tesla Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative'>
        <Header />
        <Hero />
      </main>
    </>
  )
}
