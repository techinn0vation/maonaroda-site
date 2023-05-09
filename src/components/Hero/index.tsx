import {
  BackgroundHero,
  ContentHero,
  FrameBackground,
  WrapperHero
} from './styles'
import IMG_B001 from '..//..//..//public/img/IMG_B001.png'
import { Title } from '../Title'

export default function Hero() {
  return (
    <WrapperHero>
      <FrameBackground>
        <BackgroundHero src={IMG_B001} alt="Banner" />
      </FrameBackground>
      <ContentHero>
        <Title title="laurem ipsilum rusy darkmgty" />
        <Title title="faça o download do nosso aplicativo." />
      </ContentHero>
    </WrapperHero>
  )
}
