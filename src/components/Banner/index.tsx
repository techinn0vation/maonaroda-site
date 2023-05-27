import DisplayTitle from '../Title'
import DisplayTypography from '../Typography'

import IMG_B003 from '..//..//..//public/img/IMG_B003.png'
import IMG_B004 from '..//..//..//public/img/IMG_B004.png'

import {
  BannerHeadline,
  BlockBanner,
  ButtonStore,
  WrapperStoreButtons,
  ContentBanner,
  FrameStore,
  IconAppStore,
  IconGoogleStore,
  WrapperBanner,
  WrapperFrameStore,
  ContentStore
} from './styles'

interface BannerProps {
  title: string;
  text: string;
}

export default function Banner({ title, text }: BannerProps) {
  return (
    <WrapperBanner id="banner">
      <ContentBanner>
        <BlockBanner>
          <BannerHeadline>
            <DisplayTitle DisplayTitle={title} />
            <DisplayTypography DisplayTypography={text} />
          </BannerHeadline>
          <WrapperStoreButtons>
            <ButtonStore href="https://play.google.com/store/apps/details?id=com.klirineu.maonaroda2">
              <IconGoogleStore />
              <ContentStore>
                <DisplayTitle DisplayTitle="disponível no" />
                <DisplayTypography DisplayTypography="google store" />
              </ContentStore>
            </ButtonStore>
            <ButtonStore href="https://apps.apple.com/br/app/m%C3%A3o-na-roda-servi%C3%A7os/id6447600628">
              <IconAppStore />
              <ContentStore>
                <DisplayTitle DisplayTitle="disponível na" />
                <DisplayTypography DisplayTypography="app store" />
              </ContentStore>
            </ButtonStore>
          </WrapperStoreButtons>
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
