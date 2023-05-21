import Title from '../Title'
import Text from '../Text'
import Fields from '../Fields'
import { Link } from 'react-scroll'
import { useInView } from 'react-intersection-observer'

import IMG_B001 from '..//..//..//public/img/IMG_B001.png'

import {
  BackgroundFrame,
  BlockHero,
  BsArrowDown,
  ButtonHero,
  ContentHero,
  FrameFloating,
  HeadlineHero,
  HeroFrame,
  ItalicizedText,
  RowIitalicizedText,
  SubHeadlineHero,
  WrapperHero
} from './styles'

export default function Hero() {
  const { ref, inView } = useInView()
  return (
    <WrapperHero ref={ref} inView={inView}>
      <ContentHero>
        <BlockHero>
          <HeadlineHero>
            <Title message="laurem ipsilum rusy busky darskmgty busky darskmgty" />
            <SubHeadlineHero>
              <Text message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis vel velit ut faucibus. Nam interdum tellus id nunc hendrerit efficitur. Cras auctor eros quam, per conubia nostra, per inceptos himenaeos." />
              <Text message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis vel velit ut faucibus. Nam interdum tellus id nunc hendrerit efficitur. Cras auctor eros quam, per conubia nostra, per inceptos himenaeos." />
            </SubHeadlineHero>
            <Link
              activeClass="active"
              to="banner"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              <ButtonHero>
                <Text message="baixe grátis agora mesmo!" />
                <BsArrowDown />
              </ButtonHero>
            </Link>
            <RowIitalicizedText>
              <ItalicizedText>° 2 mil empreendedores</ItalicizedText>
              em todo o estado, profissionais e confiáveis na espera para
              atende-lós.
            </RowIitalicizedText>
          </HeadlineHero>
        </BlockHero>
        <BlockHero>
          <HeroFrame>
            <BackgroundFrame
              src={IMG_B001}
              alt="Image serviço"
              priority={true}
            />
            <FrameFloating />
            <FrameFloating />
          </HeroFrame>
        </BlockHero>
      </ContentHero>
      <Fields />
    </WrapperHero>
  )
}
