import {
  BlockProfissional,
  ButtonAccess,
  ContentProfissional,
  FrameProfissional,
  SubHeadlineProfissional,
  WrapperFrameProfissional,
  WrapperProfissional
} from './styles'

import IMG_B005 from '..//..//..//public/img/IMG_B005.png'
import Title from '../Title'
import Text from '../Text'

export default function Profissional() {
  return (
    <WrapperProfissional>
      <ContentProfissional>
        <WrapperFrameProfissional>
          <FrameProfissional src={IMG_B005} alt="" />
        </WrapperFrameProfissional>
        <BlockProfissional>
          <SubHeadlineProfissional>
            <Title title="você é um profissional?" />
            <Text message="centenas de solicitações por dia esperando por você" />
          </SubHeadlineProfissional>
          <ButtonAccess href="/#">
            <Text message="acessar aplicativo" />
          </ButtonAccess>
        </BlockProfissional>
      </ContentProfissional>
    </WrapperProfissional>
  )
}
