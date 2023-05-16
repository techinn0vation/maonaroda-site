import React, { useState } from 'react'
import Text from '../Text'
import Title from '../Title'

import { useInView } from 'react-intersection-observer'

import IMG_B003 from '..//..//..//public/img/IMG_B003.png'
import IMG_B006 from '..//..//..//public/img/IMG_B006.png'
import IMG_B007 from '..//..//..//public/img/IMG_B007.png'
import IMG_B008 from '..//..//..//public/img/IMG_B008.png'

import {
  BlockStepByStep,
  ContentStepByStep,
  FrameStepByStep,
  HeadlineStepByStep,
  InformStepByStep,
  ToggleLeft,
  ToggleRight,
  WrapperFrameStepByStep,
  WrapperStepByStep
} from './styles'

export default function StepByStep() {
  const { ref, inView } = useInView()

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
    <WrapperStepByStep ref={ref} inView={inView}>
      <HeadlineStepByStep>
        <Title title="como funciona?" />
        <Text message="exemplo: cliente" />
      </HeadlineStepByStep>
      <ContentStepByStep>
        <ToggleLeft
          onClick={() => {
            scrollToNextImage('left')
          }}
        />
        <BlockStepByStep id="contentStepByStep">
          <WrapperFrameStepByStep>
            <FrameStepByStep src={IMG_B003} alt="" />
            <InformStepByStep>
              <Text message="1: faça o seu cadastro" />
            </InformStepByStep>
          </WrapperFrameStepByStep>
          <WrapperFrameStepByStep>
            <FrameStepByStep src={IMG_B006} alt="" />
            <InformStepByStep>
              <Text message="2: selecione o serviço desejado e confira os valores" />
            </InformStepByStep>
          </WrapperFrameStepByStep>
          <WrapperFrameStepByStep>
            <FrameStepByStep src={IMG_B007} alt="" />
            <InformStepByStep>
              <Text message="3: finalize o agendamento do serviço" />
            </InformStepByStep>
          </WrapperFrameStepByStep>
          <WrapperFrameStepByStep>
            <FrameStepByStep src={IMG_B008} alt="" />
            <InformStepByStep>
              <Text message="4:  confirme seu endereço e aguarde um técnico" />
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
