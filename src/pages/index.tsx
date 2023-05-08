import Layout from '@/layout'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '@assets/logo.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mão na Roda</title>
      </Head>
      <Layout>
        <div>
          <h1>Home</h1>
          <Image src={Logo} alt="Logo" />
        </div>
      </Layout>
    </>
  )
}
