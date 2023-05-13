import Title from '../Title'

import SVG_B001 from '..//..//assets/svg/SVG_B001.svg'
import SVG_B002 from '..//..//assets/svg/SVG_B002.svg'
import SVG_B003 from '..//..//assets/svg/SVG_B003.svg'
import SVG_B004 from '..//..//assets/svg/SVG_B004.svg'
import SVG_B005 from '..//..//assets/svg/SVG_B005.svg'
import SVG_B006 from '..//..//assets/svg/SVG_B006.svg'

import {
  BlockCategoria,
  ContentCategorias,
  FrameCategoria,
  HeadlineCategorias,
  NameCategoria,
  WrapperCategorias
} from './styles'

export default function Categorias() {
  return (
    <WrapperCategorias>
      <HeadlineCategorias>
        <Title title="categorias em destaques" />
      </HeadlineCategorias>
      <ContentCategorias>
        <BlockCategoria>
          <FrameCategoria src={SVG_B001} alt="Categoria ver todos" />
          <NameCategoria>ver todos</NameCategoria>
        </BlockCategoria>
        <BlockCategoria>
          <FrameCategoria src={SVG_B002} alt="Categoria elétrica" />
          <NameCategoria>elétrica</NameCategoria>
        </BlockCategoria>
        <BlockCategoria>
          <FrameCategoria src={SVG_B003} alt="Categoria carpintaria" />
          <NameCategoria>carpintaria</NameCategoria>
        </BlockCategoria>
        <BlockCategoria>
          <FrameCategoria src={SVG_B004} alt="Categoria encanador" />
          <NameCategoria>encanador</NameCategoria>
        </BlockCategoria>
        <BlockCategoria>
          <FrameCategoria src={SVG_B005} alt="Categoria diarista" />
          <NameCategoria>diarista</NameCategoria>
        </BlockCategoria>
        <BlockCategoria>
          <FrameCategoria src={SVG_B006} alt="Categoria pintura" />
          <NameCategoria>pintura</NameCategoria>
        </BlockCategoria>
      </ContentCategorias>
    </WrapperCategorias>
  )
}
