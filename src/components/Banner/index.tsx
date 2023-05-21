import Title from '../Title'
import Text from '../Text'
import { useInView } from 'react-intersection-observer'

import IMG_B003 from '..//..//..//public/img/IMG_B003.png'
import IMG_B004 from '..//..//..//public/img/IMG_B004.png'

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

interface BannerProps {
  title: string;
  text: string;
}

export default function Banner({ title, text }: BannerProps) {
  const { ref, inView } = useInView()

  return (
    <WrapperBanner id="banner" ref={ref} inView={inView}>
      <BlockBanner>
        <ContentBanner>
          <HeadlineBanner>
            <Title message={title} />
            <Text message={text} />
          </HeadlineBanner>
          <WrapperStore>
            <BlockStore href="https://play.google.com/store/apps/details?id=com.klirineu.maonaroda2">
              <IconGoogleStore />
              <BlockTextStore>
                <Title message="disponível na" />
                <Text message="google play" />
              </BlockTextStore>
            </BlockStore>
            <BlockStore href="https://apps.apple.com/br/app/m%C3%A3o-na-roda-servi%C3%A7os/id6447600628">
              <IconAppStore />
              <BlockTextStore>
                <Title message="disponível na" />
                <Text message="app store" />
              </BlockTextStore>
            </BlockStore>
          </WrapperStore>
        </ContentBanner>
        <WrapperFrameBanner>
          <BlockFrameBanner>
            <ImageFrameBanner
              src={IMG_B003}
              alt="Cadastro de usuário app"
              priority={true}
            />
          </BlockFrameBanner>
          <BlockFrameBanner>
            <ImageFrameBanner
              src={IMG_B004}
              alt="Image agendamento app"
              priority={true}
            />
          </BlockFrameBanner>
        </WrapperFrameBanner>
      </BlockBanner>
    </WrapperBanner>
  )
}
