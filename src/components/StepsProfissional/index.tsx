import React, { useState } from 'react'
import DisplayTitle from '../Title'
import DisplayTypography from '../Typography'

import IMG_B003 from '..//..//..//public/img/IMG_B003.png'
import IMG_B006 from '..//..//..//public/img/IMG_B006.png'
import IMG_B007 from '..//..//..//public/img/IMG_B007.png'
import IMG_B008 from '..//..//..//public/img/IMG_B008.png'

import {
  WrapperStepByStep,
  HeadlineStepByStep,
  ContentStepByStep,
  ToggleLeft,
  BlockStepByStep,
  WrapperFrameStepByStep,
  FrameStepByStep,
  InformStepByStep,
  ToggleRight
} from './styles'

export default function StepsProfissional() {
  const [scrollableClass, setScrollableClass] = useState('scrollable-content')

  const scrollToNextImage = (direction: 'left' | 'right') => {
    const scrollContainer = document.getElementById('contentStepByStep')
    if (scrollContainer != null) {
      const scrollAmount =
        direction === 'left'
          ? -scrollContainer.offsetWidth
          : scrollContainer.offsetWidth
      scrollContainer.scrollLeft += scrollAmount
      setScrollableClass('scrollable-content smooth-scroll')
      setTimeout(() => {
        setScrollableClass('scrollable-content')
      }, 500)
    }
  }

  return (
    <WrapperStepByStep>
      <HeadlineStepByStep>
        <DisplayTitle DisplayTitle="como funciona?" />
        <DisplayTypography DisplayTypography="exemplo: profissional" />
      </HeadlineStepByStep>
      <ContentStepByStep>
        <ToggleLeft
          onClick={() => {
            scrollToNextImage('left')
          }}
        />
        <BlockStepByStep id="contentStepByStep">
          <WrapperFrameStepByStep>
            <FrameStepByStep
              src={IMG_B003}
              alt="Faça o seu cadastro"
              priority={true}
            />
            <InformStepByStep>
              <DisplayTypography DisplayTypography="faça o seu cadastro" />
            </InformStepByStep>
          </WrapperFrameStepByStep>
          <WrapperFrameStepByStep>
            <FrameStepByStep
              src={IMG_B006}
              alt="Selecione o serviço"
              priority={true}
            />
            <InformStepByStep>
              <DisplayTypography DisplayTypography="selecione o serviço desejado e confira os valores" />
            </InformStepByStep>
          </WrapperFrameStepByStep>
          <WrapperFrameStepByStep>
            <FrameStepByStep
              src={IMG_B007}
              alt="Finalize o agendamento"
              priority={true}
            />
            <InformStepByStep>
              <DisplayTypography DisplayTypography="finalize o agendamento do serviço" />
            </InformStepByStep>
          </WrapperFrameStepByStep>
          <WrapperFrameStepByStep>
            <FrameStepByStep
              src={IMG_B008}
              alt="Confirme o pagamento"
              priority={true}
            />
            <InformStepByStep>
              <DisplayTypography DisplayTypography="confirme seu endereço e aguarde um técnico" />
            </InformStepByStep>
          </WrapperFrameStepByStep>
        </BlockStepByStep>
        <ToggleRight
          onClick={() => {
            scrollToNextImage('right')
          }}
        />
      </ContentStepByStep>
    </WrapperStepByStep>
  )
}
