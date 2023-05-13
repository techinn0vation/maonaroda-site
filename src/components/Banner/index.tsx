import Title from '../Title'

import IMG_B003 from '..//..//..//public/img/IMG_B003.png'
import IMG_B004 from '..//..//..//public/img/IMG_B004.png'

import {
  BlockBanner,
  BlockInfoStore,
  ContentBanner,
  DescriptionInfoStore,
  DownloadInfoStore,
  FrameBanner,
  HeadlineBanner,
  IconStoreApple,
  IconStoreGoogle,
  WrapperBanner,
  WrapperFrameBanner
} from './styles'
import Text from '../Text'

export default function Banner() {
  return (
    <WrapperBanner>
      <ContentBanner>
        <BlockBanner>
          <HeadlineBanner>
            <Title title="faça o downloda do nosso aplicativo" />
          </HeadlineBanner>
          <DownloadInfoStore>
            <BlockInfoStore>
              <IconStoreGoogle />
              <DescriptionInfoStore>
                <Text message="disponível na" />
                <Text message="google play" />
              </DescriptionInfoStore>
            </BlockInfoStore>
            <BlockInfoStore>
              <IconStoreApple />
              <DescriptionInfoStore>
                <Text message="disponível na" />
                <Text message="app store" />
              </DescriptionInfoStore>
            </BlockInfoStore>
          </DownloadInfoStore>
        </BlockBanner>
        <WrapperFrameBanner>
          <FrameBanner src={IMG_B003} alt="" />
          <FrameBanner src={IMG_B004} alt="" />
        </WrapperFrameBanner>
      </ContentBanner>
    </WrapperBanner>
  )
}
