import Text from '../Text'

import {
  WrapperAssets,
  BlockAssets,
  FrameAssets,
  ContentAssets,
  WrapperIndicators,
  DisplayIndicators
} from './styles'

import SVG_B007 from '..//..//assets/svg/SVG_B007.svg'
import SVG_B008 from '..//..//assets/svg/SVG_B008.svg'
import SVG_B009 from '..//..//assets/svg/SVG_B009.svg'
import SVG_B010 from '..//..//assets/svg/SVG_B010.svg'
import SVG_B011 from '..//..//assets/svg/SVG_B011.svg'
import SVG_B012 from '..//..//assets/svg/SVG_B012.svg'
import SVG_B013 from '..//..//assets/svg/SVG_B013.svg'

export default function Carousel() {
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
    <WrapperAssets>
      <ContentAssets id="content-assets">
        <BlockAssets id="slide-1">
          <FrameAssets src={SVG_B007} alt="Linkedin" />
          <Text message="linkedin" />
        </BlockAssets>
        <BlockAssets id="slide-2">
          <FrameAssets src={SVG_B008} alt="Twitter" />
          <Text message="twitter" />
        </BlockAssets>
        <BlockAssets id="slide-3">
          <FrameAssets src={SVG_B009} alt="github" />
          <Text message="github" />
        </BlockAssets>
        <BlockAssets id="slide-4">
          <FrameAssets src={SVG_B010} alt="blogger" />
          <Text message="blogger" />
        </BlockAssets>
        <BlockAssets id="slide-5">
          <FrameAssets src={SVG_B011} alt="google" />
          <Text message="google" />
        </BlockAssets>
        <BlockAssets id="slide-6">
          <FrameAssets src={SVG_B012} alt="visa" />
          <Text message="visa" />
        </BlockAssets>
        <BlockAssets id="slide-7">
          <FrameAssets src={SVG_B013} alt="mastercard" />
          <Text message="mastercard" />
        </BlockAssets>
      </ContentAssets>
      <WrapperIndicators>
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-1')
          }}
        />
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-2')
          }}
        />
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-3')
          }}
        />
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-4')
          }}
        />
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-5')
          }}
        />
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-6')
          }}
        />
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-7')
          }}
        />
      </WrapperIndicators>
    </WrapperAssets>
  )
}
