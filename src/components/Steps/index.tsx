import { BlockSteps, ContentSteps, FrameSteps, WrapperSteps } from './styles'

import IMG_B003 from '..//..//..//public/img/IMG_B003.png'
import IMG_B007 from '..//..//..//public/img/IMG_B007.png'
import IMG_B008 from '..//..//..//public/img/IMG_B008.png'

import Text from '../Text'
import { WrapperIndicators, DisplayIndicators } from '../Fields/styles'

export default function Steps() {
  const handleClick = (id: string) => {
    const slideElement: HTMLElement | null = document.getElementById(id)
    if (slideElement !== null) {
      const slidePosition = slideElement.offsetLeft
      document
        .getElementById('content-steps')
        ?.scrollTo({ left: slidePosition, behavior: 'smooth' })
    }
  }

  return (
    <WrapperSteps>
      <ContentSteps id="content-steps">
        <BlockSteps id="slide-1">
          <FrameSteps src={IMG_B003} alt="faça seu cadastro" />
          <Text message="1&thinsp;: faça o seu cadastro" />
        </BlockSteps>
        <BlockSteps id="slide-2">
          <FrameSteps src={IMG_B007} alt="selecione o serviço" />
          <Text message="2&thinsp;: selecione o serviço desejado e confira os valores" />
        </BlockSteps>
        <BlockSteps id="slide-3">
          <FrameSteps src={IMG_B008} alt="finalize o pagamento" />
          <Text message="3&thinsp;: finalize o agendamento do serviço" />
        </BlockSteps>
        <BlockSteps id="slide-4">
          <FrameSteps src={IMG_B008} alt="finalize o pagamento" />
          <Text message="3&thinsp;: finalize o agendamento do serviço" />
        </BlockSteps>
      </ContentSteps>
      <WrapperIndicators>
        <DisplayIndicators
          type="radio"
          id="slide-1"
          onClick={() => {
            handleClick('slide-1')
          }}
        />
        <DisplayIndicators
          type="radio"
          id="slide-2"
          onClick={() => {
            handleClick('slide-2')
          }}
        />
        <DisplayIndicators
          type="radio"
          id="slide-3"
          onClick={() => {
            handleClick('slide-3')
          }}
        />
        <DisplayIndicators
          type="radio"
          id="slide-4"
          onClick={() => {
            handleClick('slide-4')
          }}
        />
      </WrapperIndicators>
    </WrapperSteps>
  )
}
