import Text from '../Text'
import Title from '../Title'

import IMG_B001 from '..//..//..//public/img/IMG_B001.png'

import SVG_B007 from '..//..//assets/svg/SVG_B007.svg'
import SVG_B008 from '..//..//assets/svg/SVG_B008.svg'
import SVG_B009 from '..//..//assets/svg/SVG_B009.svg'
import SVG_B010 from '..//..//assets/svg/SVG_B010.svg'
import SVG_B011 from '..//..//assets/svg/SVG_B011.svg'
import SVG_B012 from '..//..//assets/svg/SVG_B012.svg'
import SVG_B013 from '..//..//assets/svg/SVG_B013.svg'

import {
  BackgroundFrame,
  BlockAssets,
  BlockHero,
  BsArrowIcon,
  ButtonDownload,
  ContentFrame,
  ContentHero,
  DisplayMark,
  FrameAssets,
  FrameFloating,
  HeadlineHero,
  SubHeadlineHero,
  TextMark,
  WrapperAssets,
  WrapperHero
} from './styles'

export default function Hero() {
  return (
    <WrapperHero>
      <BlockHero>
        <ContentHero>
          <HeadlineHero>
            <Title title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
          </HeadlineHero>
          <SubHeadlineHero>
            <Text message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis vel velit ut faucibus. Nam interdum tellus id nunc hendrerit efficitur. Cras auctor eros quam, per conubia nostra, per inceptos himenaeos." />
            <Text message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis vel velit ut faucibus. Nam interdum tellus id nunc hendrerit efficitur. Cras auctor eros quam, per conubia nostra, per inceptos himenaeos." />
          </SubHeadlineHero>
          <ButtonDownload>
            <Text message="baixe grátis agora mesmo!" />
            <BsArrowIcon />
          </ButtonDownload>
          <SubHeadlineHero>
            <DisplayMark>
              <TextMark>° 2 mil empreendedores</TextMark> em todo o estado,
              profissionais e confiáveis na espera para atende-lós.
            </DisplayMark>
          </SubHeadlineHero>
        </ContentHero>
        <ContentHero>
          <ContentFrame>
            <FrameFloating />
            <BackgroundFrame src={IMG_B001} alt="Image work" />
            <FrameFloating />
          </ContentFrame>
        </ContentHero>
      </BlockHero>
      <WrapperAssets>
        <BlockAssets>
          <FrameAssets src={SVG_B007} alt="Linkedin" />
          <Text message="linkedin" />
        </BlockAssets>
        <BlockAssets>
          <FrameAssets src={SVG_B008} alt="Twitter" />
          <Text message="twitter" />
        </BlockAssets>
        <BlockAssets>
          <FrameAssets src={SVG_B009} alt="github" />
          <Text message="github" />
        </BlockAssets>
        <BlockAssets>
          <FrameAssets src={SVG_B010} alt="blogger" />
          <Text message="blogger" />
        </BlockAssets>
        <BlockAssets>
          <FrameAssets src={SVG_B011} alt="google" />
          <Text message="google" />
        </BlockAssets>
        <BlockAssets>
          <FrameAssets src={SVG_B012} alt="visa" />
          <Text message="visa" />
        </BlockAssets>
        <BlockAssets>
          <FrameAssets src={SVG_B013} alt="mastercard" />
          <Text message="mastercard" />
        </BlockAssets>
      </WrapperAssets>
    </WrapperHero>
  )
}
