import Text from '../Text'
import Title from '../Title'

import IMG_B003 from '..//..//..//public/img/IMG_B002.png'

import {
  BlockTips,
  ContentFrameTips,
  ContentInfoTips,
  ContentTips,
  DescriptionTips,
  DividerSlogan,
  FrameImageTips,
  HeadlineTips,
  SloganInfoTips,
  WrapperTips
} from './styles'

const references = [
  {
    slogan: 'category name',
    date: 'date',
    reference: 'Lorem ipsum dolor sit amet, consectetur.',
    SubReference: 'Lorem ipsum dolor sit amet, consectetur.'
  }
]

export default function Tips() {
  return (
    <WrapperTips>
      <HeadlineTips>
        <Title title="confira nosso blog com boas dicas para o seu dia a dia" />
        <Text message="lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam." />
      </HeadlineTips>
      {references.map((item, index) => (
        <ContentTips key={index}>
          <BlockTips>
            <ContentFrameTips>
              <FrameImageTips src={IMG_B003} alt="Image blogger" />
            </ContentFrameTips>
            <ContentInfoTips>
              <SloganInfoTips>{item.slogan}</SloganInfoTips>
              <DividerSlogan />
              <SloganInfoTips>{item.date}</SloganInfoTips>
            </ContentInfoTips>
            <DescriptionTips>
              <Text message={`${item.reference}`} />
              <Text message={`${item.SubReference}`} />
            </DescriptionTips>
          </BlockTips>
          <BlockTips>
            <ContentFrameTips>
              <FrameImageTips src={IMG_B003} alt="Image blogger" />
            </ContentFrameTips>
            <ContentInfoTips>
              <SloganInfoTips>{item.slogan}</SloganInfoTips>
              <DividerSlogan />
              <SloganInfoTips>{item.date}</SloganInfoTips>
            </ContentInfoTips>
            <DescriptionTips>
              <Text message={`${item.reference}`} />
              <Text message={`${item.SubReference}`} />
            </DescriptionTips>
          </BlockTips>
          <BlockTips>
            <ContentFrameTips>
              <FrameImageTips src={IMG_B003} alt="Image blogger" />
            </ContentFrameTips>
            <ContentInfoTips>
              <SloganInfoTips>{item.slogan}</SloganInfoTips>
              <DividerSlogan />
              <SloganInfoTips>{item.date}</SloganInfoTips>
            </ContentInfoTips>
            <DescriptionTips>
              <Text message={`${item.reference}`} />
              <Text message={`${item.SubReference}`} />
            </DescriptionTips>
          </BlockTips>
        </ContentTips>
      ))}
    </WrapperTips>
  )
}
