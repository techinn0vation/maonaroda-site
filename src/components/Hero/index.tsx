import DisplayTitle from '../Title'
import DisplayTypography from '../Typography'

import IMG_B001 from '..//..//..//public/img/IMG_B001.png'

import {
  WrapperHero,
  ContentHero,
  BlockHero,
  HeroHeadline,
  SubHeroHeadline,
  BackgroundFrame,
  FrameFloating,
  ButtonSmooth,
  BsArrowDown,
  FrameHero,
  RowItalicizedText,
  ItalicizedText
} from './styles'
import Fields from '../Fields'

export default function Hero() {
  return (
    <WrapperHero>
      <ContentHero>
        <BlockHero>
          <HeroHeadline>
            <DisplayTitle DisplayTitle={'transforme seu lar com facilidade!'} />
          </HeroHeadline>
          <SubHeroHeadline>
            <DisplayTypography
              DisplayTypography={
                'descubra o Mão na roda, a solução completa para serviços domésticos. Encontre profissionais qualificados em várias categorias próximos a você. Baixe o app e simplifique sua vida!'
              }
            />
            <DisplayTypography
              DisplayTypography={
                'clientes: Receba ajuda especializada para todos os reparos e projetos em sua casa. Garanta serviços de qualidade e um lar impecável.'
              }
            />
            <DisplayTypography
              DisplayTypography={
                'profissionais: Aumente sua renda e conquiste novos clientes. Defina sua agenda, mostre seu talento e destaque-se em sua área.'
              }
            />
            <DisplayTypography
              DisplayTypography={
                'baixe o app agora e transforme seu lar com praticidade!'
              }
            />
          </SubHeroHeadline>
          <ButtonSmooth
            activeClass="active"
            to="banner"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            <DisplayTypography
              DisplayTypography={'baixe grátis agora mesmo!'}
            />
            <BsArrowDown />
          </ButtonSmooth>
          <RowItalicizedText>
            Profissionais <ItalicizedText>especializados.</ItalicizedText>
            Serviços confiáveis. Sua casa em boas mãos. Experimente agora!
          </RowItalicizedText>
        </BlockHero>
        {/*  */}
        <BlockHero>
          <FrameHero>
            <FrameFloating />
            <FrameFloating />
            <BackgroundFrame
              src={IMG_B001}
              alt="Serviços Mão na roda"
              priority={true}
            />
          </FrameHero>
        </BlockHero>
      </ContentHero>
      <Fields />
    </WrapperHero>
  )
}
