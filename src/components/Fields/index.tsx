import DisplayTypography from '../Typography'

import SVG_B007 from '..//..//assets/svg/SVG_B007.svg'
import SVG_B008 from '..//..//assets/svg/SVG_B008.svg'
import SVG_B009 from '..//..//assets/svg/SVG_B009.svg'
import SVG_B010 from '..//..//assets/svg/SVG_B010.svg'
import SVG_B011 from '..//..//assets/svg/SVG_B011.svg'
import SVG_B012 from '..//..//assets/svg/SVG_B012.svg'
import SVG_B013 from '..//..//assets/svg/SVG_B013.svg'

import {
  WrapperSlide,
  ContentSlide,
  BlockSlide,
  FrameSlideImage,
  WrapperIndicators,
  DisplayIndicators
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
          <DisplayTypography DisplayTypography={'linkedin'} />
        </BlockSlide>
        <BlockSlide>
          <FrameSlideImage src={SVG_B008} alt="Twitter Mão na roda" />
          <DisplayTypography DisplayTypography={'twitter'} />
        </BlockSlide>
        <BlockSlide id="slide-2">
          <FrameSlideImage src={SVG_B009} alt="Github Mão na roda" />
          <DisplayTypography DisplayTypography={'github'} />
        </BlockSlide>
        <BlockSlide>
          <FrameSlideImage src={SVG_B010} alt="Blogger Mão na roda" />
          <DisplayTypography DisplayTypography={'blogger'} />
        </BlockSlide>
        <BlockSlide id="slide-3">
          <FrameSlideImage src={SVG_B011} alt="Google Mão na roda" />
          <DisplayTypography DisplayTypography={'google'} />
        </BlockSlide>
        <BlockSlide>
          <FrameSlideImage src={SVG_B012} alt="Visa Mão na roda" />
          <DisplayTypography DisplayTypography={'visa'} />
        </BlockSlide>
        <BlockSlide id="slide-4">
          <FrameSlideImage src={SVG_B013} alt="Mastercard Mão na roda" />
          <DisplayTypography DisplayTypography={'mastercard'} />
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
