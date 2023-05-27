import FormLogin from '@/components/Form'
import Layout from '@/components/Layout'
import SettingsSeo from '@/components/Seo'

export default function Login() {
  return (
    <Layout>
      <SettingsSeo
        title="Mão na roda - Login"
        description="Pagina de login Mão na roda"
        keywords="Solicitação de serviços, Login de usuário, Acesso à conta, Portal de solicitações"
      />
      <FormLogin />
    </Layout>
  )
}
