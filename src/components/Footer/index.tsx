import {
  BlockFooter,
  ContentFooter,
  FooterLineEnd,
  LinkFooter,
  SocialField,
  WrapperFooter,
  WrapperSocialField
} from './styles'

import DisplayTitle from '../Title'
import DisplayTypography from '../Typography'

import Logo from '..//..//..//public/img/Logo.png'
import { LogoBranding } from '../Navigation/styles'

import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

export default function Footer() {
  return (
    <WrapperFooter>
      <ContentFooter>
        <BlockFooter>
          <DisplayTitle DisplayTitle="interesses" />
          <LinkFooter href="/sobreNos">sobre nós</LinkFooter>
          <LinkFooter href="#">categorias</LinkFooter>
          <LinkFooter href="#">trabalhe conosco</LinkFooter>
        </BlockFooter>
        <BlockFooter>
          <LogoBranding src={Logo} alt="Mão na roda Logo" priority={true} />
          <LinkFooter href="#">política de privacidade</LinkFooter>
          <LinkFooter href="#">termos de uso</LinkFooter>
        </BlockFooter>
        <BlockFooter>
          <DisplayTitle DisplayTitle="siga-nos nas redes sociais" />
          <WrapperSocialField>
            <SocialField href="#">
              <FiFacebook />
            </SocialField>
            <SocialField href="mailto:contato@mao-na-roda.com">
              <AiOutlineMail />
            </SocialField>
            <SocialField href="https://wa.me/5541996108063?text=Ol%C3%A1%2C+vim+do+site+%F0%9F%98%80+%3A">
              <AiOutlineWhatsApp />
            </SocialField>
            <SocialField href="https://www.instagram.com/maonaroda_oficiall/">
              <FiInstagram />
            </SocialField>
          </WrapperSocialField>
        </BlockFooter>
      </ContentFooter>
      <FooterLineEnd>
        <DisplayTypography DisplayTypography="© 2023, Mão na Roda. CNPJ 49.856.962/0001-36 - Todos os direitos reservados." />
      </FooterLineEnd>
    </WrapperFooter>
  )
}
