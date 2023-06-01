import {
  Layout,
  Hero,
  Banner,
  QuemSomos,
  Identification
} from '@/components/GeralComponents'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Banner title="faça o download do nosso aplicativo" text="" />
      <QuemSomos />
      <Identification />
    </Layout>
  )
}
