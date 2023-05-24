import Banner from '@/components/Banner'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Profissional from '@/components/Profissional'
import SettingsSeo from '@/components/Seo'
import SobreNos from '@/components/Sobre'
import Steps from '@/components/Steps'

export default function HomePage() {
  return (
    <Layout>
      <SettingsSeo
        title="Mão na roda"
        description="Descrição da minha página"
        keywords="palavras-chave, separadas, por, vírgulas"
      />
      <Hero />
      <Banner title="faça o download do nosso aplicativo" text="" />
      <SobreNos />
      <Profissional />
      <Steps />
    </Layout>
  )
}
