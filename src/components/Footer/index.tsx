import { LogoBranding } from '../Navigation/styles'
import Text from '../Text'
import Logo from '..//..//..//public/img/Logo.png'
import IMG_B009 from '..//..//..//public/img/IMG_B009.png'

import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai'

import {
  BlockFooter,
  CellSubFooter,
  ContentFooter,
  ContentTextCompany,
  DownloadQrCode,
  IconsFields,
  LinkCellFooter,
  LinkField,
  LinkIcon,
  RowBlock,
  SubDescriptionFooter,
  WrapperFooter
} from './styles'

export default function Footer() {
  return (
    <WrapperFooter>
      <ContentFooter>
        <BlockFooter>
          <RowBlock>
            <Text message="interesses" />
          </RowBlock>
          <LinkField href="/#">
            <Text message="quem somos" />
          </LinkField>
          <LinkField href="/#">
            <Text message="categorias" />
          </LinkField>
          <LinkField href="/#">
            <Text message="blog" />
          </LinkField>
          <LinkField href="/#">
            <Text message="trabalhe conosco" />
          </LinkField>
        </BlockFooter>
        <BlockFooter>
          <LogoBranding src={Logo} alt="Mão na roda-Logo" />
          <IconsFields>
            <LinkIcon href="/#">
              <FiFacebook />
            </LinkIcon>
            <LinkIcon href="/#">
              <AiOutlineMail />
            </LinkIcon>
            <LinkIcon href="/#">
              <AiOutlineWhatsApp />
            </LinkIcon>
            <LinkIcon href="/#">
              <FiInstagram />
            </LinkIcon>
          </IconsFields>
          <SubDescriptionFooter>
            <LinkCellFooter href="/#">
              <Text message="política de privacidade" />
            </LinkCellFooter>
            <LinkCellFooter href="/#">
              <Text message="termos de uso" />
            </LinkCellFooter>
          </SubDescriptionFooter>
        </BlockFooter>
        <BlockFooter>
          <DownloadQrCode src={IMG_B009} alt="" />
          <CellSubFooter>
            <Text message="faça o download do nosso aplicativo" />
          </CellSubFooter>
        </BlockFooter>
      </ContentFooter>
      <ContentTextCompany>
        <Text message="© 2023, Mão na Roda. CNPJ 49.856.962/0001-36 - Todos os direitos reservados." />
      </ContentTextCompany>
    </WrapperFooter>
  )
}
