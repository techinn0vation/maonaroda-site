import DisplayButton from '../Button'
import DisplayTitle from '../Title'

import IMG_B003 from '..//..//..//public/img/IMG_B003.png'
import IMG_B004 from '..//..//..//public/img/IMG_B004.png'

import {
  BannerHeadline,
  BlockBanner,
  BlockStoreButtons,
  ContentBanner,
  FrameStore,
  IconAppStore,
  IconGoogleStore,
  WrapperBanner,
  WrapperFrameStore
} from './styles'

export default function Banner() {
  return (
    <WrapperBanner id="banner">
      <ContentBanner>
        <BlockBanner>
          <BannerHeadline>
            <DisplayTitle
              DisplayTitle={'faça o download do nosso aplicativo'}
            />
          </BannerHeadline>
          <BlockStoreButtons>
            <DisplayButton
              DisplayButton={'Disponível no Google Play'}
              href={'/'}
              icon={<IconGoogleStore />}
            />
            <DisplayButton
              DisplayButton={'Disponível na App Store'}
              href={'/'}
              icon={<IconAppStore />}
            />
          </BlockStoreButtons>
        </BlockBanner>
        <BlockBanner>
          <WrapperFrameStore>
            <FrameStore
              src={IMG_B003}
              alt="Cadastro Mão na roda"
              priority={true}
            />
            <FrameStore
              src={IMG_B004}
              alt="Agendamento Mão na roda"
              priority={true}
            />
          </WrapperFrameStore>
        </BlockBanner>
      </ContentBanner>
    </WrapperBanner>
  )
}
