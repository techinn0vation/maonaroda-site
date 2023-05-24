import FormLogin from '@/components/Form'
import Layout from '@/components/Layout'
import SettingsSeo from '@/components/Seo'

export default function Login() {
  return (
    <Layout>
      <SettingsSeo
        title="Mão na roda - Login"
        description="Descrição da minha página"
        keywords="palavras-chave, separadas, por, vírgulas"
      />
      <FormLogin />
    </Layout>
  )
}
