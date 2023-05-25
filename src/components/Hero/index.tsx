import DisplayTitle from '../Title'
import DisplayTypography from '../Typography'

import {
  WrapperHero,
  ContentHero,
  BlockHero,
  HeroHeadline,
  SubHeroHeadline
} from './styles'

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
                'Clientes: Receba ajuda especializada para todos os reparos e projetos em sua casa. Garanta serviços de qualidade e um lar impecável.'
              }
            />
            <DisplayTypography
              DisplayTypography={
                'Profissionais: Aumente sua renda e conquiste novos clientes. Defina sua agenda, mostre seu talento e destaque-se em sua área.'
              }
            />
            <DisplayTypography
              DisplayTypography={
                'Baixe o app agora e transforme seu lar com praticidade!'
              }
            />
          </SubHeroHeadline>
        </BlockHero>

        <BlockHero></BlockHero>
      </ContentHero>
    </WrapperHero>
  )
}
