import Title from '../Title'
import Text from '../Text'
import { useInView } from 'react-intersection-observer'

import IMG_B005 from '..//..//..//public/img/IMG_B005.png'

import {
  BlockProfissional,
  ButtonAccess,
  ContentProfissional,
  FrameProfissional,
  SubHeadlineProfissional,
  WrapperFrameProfissional,
  WrapperProfissional
} from './styles'

export default function Profissional() {
  const { ref, inView } = useInView()

  return (
    <WrapperProfissional ref={ref} inView={inView}>
      <ContentProfissional>
        <WrapperFrameProfissional>
          <FrameProfissional
            src={IMG_B005}
            alt="Profissional"
            priority={true}
          />
        </WrapperFrameProfissional>
        <BlockProfissional>
          <SubHeadlineProfissional>
            <Title message="você é um profissional?" />
            <Text message="centenas de solicitações por dia esperando por você" />
            <Text message="aumente sua renda oferecendo serviços domésticos. Baixe o aplicativo agora!" />
            <Text message="ganhe dinheiro fazendo o que você ama. Baixe o aplicativo e comece hoje!" />
          </SubHeadlineProfissional>
          <ButtonAccess href="/sobre">
            <Text message="acessar aplicativo" />
          </ButtonAccess>
        </BlockProfissional>
      </ContentProfissional>
    </WrapperProfissional>
  )
}
