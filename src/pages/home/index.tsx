import {
  Layout,
  Hero,
  Banner,
  Identification
} from '@/components/GeralComponents'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Banner title="faça o download do nosso aplicativo" text="" />
      <Identification />
    </Layout>
  )
}
