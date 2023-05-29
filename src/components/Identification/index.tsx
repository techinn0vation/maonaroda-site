import { useState } from 'react'
import DisplayTitle from '../Title'
import DisplayTypography from '../Typography'

import StepsProfissional from '../StepsProfissional'
import StepsCliente from '../StepsCliente'

import IMG_B005 from '..//..//..//public/img/IMG_B005.png'
import IMG_B010 from '..//..//..//public/img/IMG_B010.png'

import {
  BlockIdentification,
  ButtonIdentification,
  ContentIdentification,
  HeadlineIdentification,
  ImageIdentification,
  WrapperIdentification
} from './styles'

export default function Identification() {
  const [displayText, setDisplayText] = useState({
    titleUser: 'você é um profissional ?',
    message1: 'centenas de solicitações por dia esperando por você?',
    message2: 'aumente sua renda oferecendo serviços domésticos.',
    message3:
      'ganhe dinheiro fazendo o que você ama. Baixe o aplicativo e comece hoje!'
  })

  const [buttonClicked, setButtonClicked] = useState(false)
  const [imageSrc, setImageSrc] = useState(IMG_B005)

  function toggleUser() {
    if (buttonClicked) {
      setDisplayText({
        titleUser: 'você é um profissional ?',
        message1: 'centenas de solicitações por dia esperando por você?',
        message2: 'aumente sua renda oferecendo serviços domésticos.',
        message3:
          'ganhe dinheiro fazendo o que você ama. Baixe o app e comece hoje!'
      })
      setImageSrc(IMG_B005)
    } else {
      setDisplayText({
        titleUser: 'você é um cliente ?',
        message1: 'centenas de profissionais especializados e ao seu dispor.',
        message2: 'dê aquele checkmate naquele probleminha caseiro!',
        message3: 'baixe o app e comece hoje!'
      })
      setImageSrc(IMG_B010)
    }
    setButtonClicked(!buttonClicked)
  }

  return (
    <WrapperIdentification>
      <ContentIdentification>
        <BlockIdentification>
          <ImageIdentification
            src={imageSrc}
            alt="Profissional Cliente"
            priority={true}
          />
        </BlockIdentification>
        <BlockIdentification>
          <HeadlineIdentification>
            <DisplayTitle DisplayTitle={displayText.titleUser} />
            <DisplayTypography DisplayTypography={displayText.message1} />
            <DisplayTypography DisplayTypography={displayText.message2} />
            <DisplayTypography DisplayTypography={displayText.message3} />
          </HeadlineIdentification>
          <ButtonIdentification onClick={toggleUser}>
            <DisplayTypography
              DisplayTypography={
                buttonClicked ? 'sou profissional' : 'sou cliente'
              }
            />
          </ButtonIdentification>
        </BlockIdentification>
      </ContentIdentification>
      {buttonClicked ? <StepsCliente /> : <StepsProfissional />}
    </WrapperIdentification>
  )
}
