import Head from 'next/head'
import { useRouter } from 'next/router'
import { World } from '@/components/World'

export default function Home() {
  const router = useRouter()
  const SITE_NAME = 'Commie Dream'
  const DOMAIN = 'commie-dream.vercel.app/'
  const URL = `https://${DOMAIN}${router.pathname}`
  const LOCALE = 'en_US'
  return (
    <>
      <Head>
        <title>The Commie Dream</title>
        <meta name="description" content="The Commie Dream" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Commie Dream" />
        <meta property="og:image" content="/images/og.png" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:locale" content={LOCALE} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <World />
    </>
  )
}
