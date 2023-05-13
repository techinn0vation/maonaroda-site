import Banner from '@/components/Banner'
import Categorias from '@/components/Categorias'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Tips from '@/components/Tips'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Categorias />
      <Tips />
      <Banner />
    </Layout>
  )
}
