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
  RowItalicizedText,
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
            <Title message="transforme seu lar com facilidade!" />
            <SubHeadlineHero>
              <Text
                message="descubra o app Mão na roda, a solução completa para serviços domésticos.
                encontre profissionais qualificados em várias categorias próximos a você.
                baixe o app e simplifique sua vida!"
              />
              <Text message="clientes: receba ajuda especializada para todos os reparos e projetos em sua casa. Garanta serviços de qualidade e um lar impecável." />
              <Text
                message="profissionais: Aumente sua renda e conquiste novos clientes. defina sua agenda, mostre seu talento e destaque-se em sua área. 
              Baixe o app agora e transforme seu lar com praticidade!"
              />
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
            <RowItalicizedText>
              Profissionais <ItalicizedText>especializados.</ItalicizedText>
              Serviços confiáveis. Sua casa em boas mãos. Experimente agora!
            </RowItalicizedText>
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
