import { Title } from '../Title'
import { useInView } from 'react-intersection-observer'

import SVG_B001 from '..//..//assets/svg/SVG_B001.svg'
import SVG_B002 from '..//..//assets/svg/SVG_B002.svg'
import SVG_B003 from '..//..//assets/svg/SVG_B003.svg'
import SVG_B004 from '..//..//assets/svg/SVG_B004.svg'
import SVG_B005 from '..//..//assets/svg/SVG_B005.svg'
import SVG_B006 from '..//..//assets/svg/SVG_B006.svg'

import {
  AssetDestaque,
  BlockDestaques,
  ContentDestaques,
  FrameDestaque,
  HeadlineDestaques,
  NameDestaque,
  WrapperDestaques
} from './styles'

export default function Destaques() {
  const { ref, inView } = useInView()

  return (
    <WrapperDestaques ref={ref} inView={inView}>
      <ContentDestaques>
        <HeadlineDestaques>
          <Title title="categorias em destaques" />
        </HeadlineDestaques>
        <BlockDestaques>
          <FrameDestaque>
            <AssetDestaque src={SVG_B001} alt="ver todos" />
            <NameDestaque>ver todos</NameDestaque>
          </FrameDestaque>
          <FrameDestaque>
            <AssetDestaque src={SVG_B002} alt="elétrica" />
            <NameDestaque>elétrica</NameDestaque>
          </FrameDestaque>
          <FrameDestaque>
            <AssetDestaque src={SVG_B003} alt="carpintaria" />
            <NameDestaque>carpintaria</NameDestaque>
          </FrameDestaque>
          <FrameDestaque>
            <AssetDestaque src={SVG_B004} alt="encanador" />
            <NameDestaque>encanador</NameDestaque>
          </FrameDestaque>
          <FrameDestaque>
            <AssetDestaque src={SVG_B005} alt="diarista" />
            <NameDestaque>diarista</NameDestaque>
          </FrameDestaque>
          <FrameDestaque>
            <AssetDestaque src={SVG_B006} alt="pintura" />
            <NameDestaque>pintura</NameDestaque>
          </FrameDestaque>
        </BlockDestaques>
      </ContentDestaques>
    </WrapperDestaques>
  )
}
