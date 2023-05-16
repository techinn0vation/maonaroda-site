import Title from '../Title'

import IMG_B003 from '..//..//..//public/img/IMG_B003.png'
import IMG_B004 from '..//..//..//public/img/IMG_B004.png'

import { useInView } from 'react-intersection-observer'

import {
  BlockBanner,
  BlockFrameBanner,
  BlockStore,
  BlockTextStore,
  ContentBanner,
  HeadlineBanner,
  IconAppStore,
  IconGoogleStore,
  ImageFrameBanner,
  WrapperBanner,
  WrapperFrameBanner,
  WrapperStore
} from './styles'

import Text from '../Text'

export default function Banner() {
  const { ref, inView } = useInView()

  return (
    <WrapperBanner ref={ref} inView={inView}>
      <BlockBanner>
        <ContentBanner>
          <HeadlineBanner>
            <Title title="faça o download do nosso aplicativo" />
          </HeadlineBanner>
          <WrapperStore>
            <BlockStore>
              <IconGoogleStore />
              <BlockTextStore>
                <Title title="disponível na" />
                <Text message="google play" />
              </BlockTextStore>
            </BlockStore>
            <BlockStore>
              <IconAppStore />
              <BlockTextStore>
                <Title title="disponível na" />
                <Text message="app store" />
              </BlockTextStore>
            </BlockStore>
          </WrapperStore>
        </ContentBanner>
        <WrapperFrameBanner>
          <BlockFrameBanner>
            <ImageFrameBanner src={IMG_B003} alt="" />
          </BlockFrameBanner>
          <BlockFrameBanner>
            <ImageFrameBanner src={IMG_B004} alt="" />
          </BlockFrameBanner>
        </WrapperFrameBanner>
      </BlockBanner>
    </WrapperBanner>
  )
}
