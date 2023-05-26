import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import QuemSomos from '@/components/QuemSomos'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Banner />
      <QuemSomos />
    </Layout>
  )
}
