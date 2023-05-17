import Text from '../Text'
import Title from '../Title'
import Carousel from '../Carousel'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-scroll'

import IMG_B001 from '..//..//..//public/img/IMG_B001.png'

import {
  BackgroundFrame,
  BlockHero,
  BsArrowIcon,
  ButtonDownload,
  ContentFrame,
  ContentHero,
  DisplayMark,
  FrameFloating,
  HeadlineHero,
  SubHeadlineHero,
  TextMark,
  WrapperHero
} from './styles'

export default function Hero() {
  const { ref, inView } = useInView()

  return (
    <WrapperHero ref={ref} inView={inView}>
      <BlockHero>
        <ContentHero>
          <HeadlineHero>
            <Title title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
          </HeadlineHero>
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
            duration={2400}
          >
            <ButtonDownload>
              <Text message="baixe grátis agora mesmo!" />
              <BsArrowIcon />
            </ButtonDownload>
          </Link>
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
            <BackgroundFrame src={IMG_B001} alt="Imagem serviço" />
            <FrameFloating />
          </ContentFrame>
        </ContentHero>
      </BlockHero>
      <Carousel />
    </WrapperHero>
  )
}
