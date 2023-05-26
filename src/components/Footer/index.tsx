import { BlockFooter, ContentFooter, LinkFooter, WrapperFooter } from './styles'
import DisplayTitle from '../Title'

import Logo from '..//..//..//public/img/Logo.png'
import { LogoBranding } from '../Navigation/styles'

export default function Footer() {
  return (
    <WrapperFooter>
      <ContentFooter>
        <BlockFooter>
          <DisplayTitle DisplayTitle="interesses" />
          <LinkFooter href="">sobre nós</LinkFooter>
          <LinkFooter href="">categorias</LinkFooter>
          <LinkFooter href="">trabalhe conosco</LinkFooter>
        </BlockFooter>
        <BlockFooter>
          <LogoBranding src={Logo} alt="Mão na roda Logo" priority={true} />
          <LinkFooter href="">política de privacidade</LinkFooter>
          <LinkFooter href="">termos de uso</LinkFooter>
        </BlockFooter>
        <BlockFooter>
          <DisplayTitle DisplayTitle="siga-nos nas redes sociais" />
        </BlockFooter>
      </ContentFooter>
    </WrapperFooter>
  )
}
