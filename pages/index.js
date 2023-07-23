import Head from 'next/head'
import { World } from '@/components/World'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Commie Dream</title>
        <meta name="description" content="The Commie Dream" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <World />
    </>
  )
}
