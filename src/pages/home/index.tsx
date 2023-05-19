import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Profissional from '@/components/Profissional'
import SobreNos from '@/components/Sobre'
import Steps from '@/components/Steps'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Banner />
      <SobreNos />
      <Profissional />
      <Steps />
    </Layout>
  )
}
