import { LogoBranding } from '../Navigation/styles'
import Logo from '..//..//..//public/img/Logo.png'
import Text from '../Text'
import { useInView } from 'react-intersection-observer'

import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

import {
  BlockFooter,
  ContentFooter,
  ContentTextCompany,
  IconsFields,
  LinkField,
  LinkIcon,
  RowBlock,
  SubDescriptionFooter,
  WrapperFooter
} from './styles'

export default function Footer() {
  const { ref, inView } = useInView()

  return (
    <WrapperFooter ref={ref} inView={inView}>
      <ContentFooter>
        <BlockFooter>
          <RowBlock>
            <Text message="interesses" />
          </RowBlock>
          <LinkField href="/sobre">
            <Text message="sobre nós" />
          </LinkField>
          <LinkField href="/#">
            <Text message="categorias" />
          </LinkField>
          <LinkField href="/#">
            <Text message="trabalhe conosco" />
          </LinkField>
        </BlockFooter>
        <BlockFooter>
          <LogoBranding src={Logo} alt="Mão na roda Logo" priority={true} />
          <SubDescriptionFooter>
            <LinkField href="/#">
              <Text message="política de privacidade" />
            </LinkField>
            <LinkField href="/#">
              <Text message="termos de uso" />
            </LinkField>
          </SubDescriptionFooter>
        </BlockFooter>
        <BlockFooter>
          <RowBlock>
            <Text message="siga-nos nas redes sociais" />
          </RowBlock>
          <IconsFields>
            <LinkIcon href="/#">
              <FiFacebook />
            </LinkIcon>
            <LinkIcon href="mailto:contato@mao-na-roda.com">
              <AiOutlineMail />
            </LinkIcon>
            <LinkIcon href="https://wa.me/5541996108063">
              <AiOutlineWhatsApp />
            </LinkIcon>
            <LinkIcon href="https://www.instagram.com/maonaroda_oficiall/">
              <FiInstagram />
            </LinkIcon>
          </IconsFields>
        </BlockFooter>
      </ContentFooter>
      <ContentTextCompany>
        <Text message="© 2023, Mão na Roda. CNPJ 49.856.962/0001-36 - Todos os direitos reservados." />
      </ContentTextCompany>
    </WrapperFooter>
  )
}
