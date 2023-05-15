import Banner from '@/components/Banner'
import Categorias from '@/components/Categorias'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Profissional from '@/components/Profissional'
import AboutUs from '@/components/Sobre'
import StepByStep from '@/components/StepByStep'
import Tips from '@/components/Tips'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Categorias />
      <Tips />
      <Banner />
      <AboutUs />
      <Profissional />
      <StepByStep />
    </Layout>
  )
}
