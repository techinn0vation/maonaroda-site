import Text from '../Text'

import SVG_B007 from '..//..//assets/svg/SVG_B007.svg'
import SVG_B008 from '..//..//assets/svg/SVG_B008.svg'
import SVG_B009 from '..//..//assets/svg/SVG_B009.svg'
import SVG_B010 from '..//..//assets/svg/SVG_B010.svg'
import SVG_B011 from '..//..//assets/svg/SVG_B011.svg'
import SVG_B012 from '..//..//assets/svg/SVG_B012.svg'
import SVG_B013 from '..//..//assets/svg/SVG_B013.svg'

import {
  BlockSlide,
  ContentSlide,
  DisplayIndicators,
  FrameSlideImage,
  WrapperIndicators,
  WrapperSlide
} from './styles'

export default function Fields() {
  const handleClick = (id: string) => {
    const slideElement: HTMLElement | null = document.getElementById(id)
    if (slideElement !== null) {
      const slidePosition = slideElement.offsetLeft
      document
        .getElementById('content-assets')
        ?.scrollTo({ left: slidePosition, behavior: 'smooth' })
    }
  }
  return (
    <WrapperSlide>
      <ContentSlide id="content-assets">
        <BlockSlide id="slide-1">
          <FrameSlideImage src={SVG_B007} alt="Linkedin Mão na roda" />
          <Text message="linkedin" />
        </BlockSlide>
        <BlockSlide>
          <FrameSlideImage src={SVG_B008} alt="Twitter Mão na roda" />
          <Text message="twitter" />
        </BlockSlide>
        <BlockSlide id="slide-2">
          <FrameSlideImage src={SVG_B009} alt="github Mão na roda" />
          <Text message="github" />
        </BlockSlide>
        <BlockSlide>
          <FrameSlideImage src={SVG_B010} alt="blogger Mão na roda" />
          <Text message="blogger" />
        </BlockSlide>
        <BlockSlide id="slide-3">
          <FrameSlideImage src={SVG_B011} alt="google Mão na roda" />
          <Text message="google" />
        </BlockSlide>
        <BlockSlide>
          <FrameSlideImage src={SVG_B012} alt="visa Mão na roda" />
          <Text message="visa" />
        </BlockSlide>
        <BlockSlide id="slide-4">
          <FrameSlideImage src={SVG_B013} alt="mastercard Mão na roda" />
          <Text message="mastercard" />
        </BlockSlide>
      </ContentSlide>
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
    </WrapperSlide>
  )
}
