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
        description="Serviços especializados e soluções eficientes"
        keywords="Mão na roda, Serviços diversos, Soluções personalizadas, Qualidade e confiabilidade, Plataforma de serviços, Download, App"
      />
      <Hero />
      <Banner title="faça o download do nosso aplicativo" text="" />
      <SobreNos />
      <Profissional />
      <Steps />
    </Layout>
  )
}
