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
import { DisplayIndicators, WrapperIndicators } from '../Carousel/styles'

export default function Categorias() {
  const handleClick = (id: string) => {
    const slideElement: HTMLElement | null = document.getElementById(id)
    if (slideElement !== null) {
      const slidePosition = slideElement.offsetLeft
      document
        .getElementById('content-destaques')
        ?.scrollTo({ left: slidePosition, behavior: 'smooth' })
    }
  }

  return (
    <WrapperCategorias>
      <HeadlineCategorias>
        <Title title="categorias em destaques" />
      </HeadlineCategorias>
      <ContentCategorias id="content-destaques">
        <BlockCategoria id="slide-1">
          <FrameCategoria src={SVG_B001} alt="Categoria ver todos" />
          <NameCategoria>ver todos</NameCategoria>
        </BlockCategoria>
        <BlockCategoria id="slide-2">
          <FrameCategoria src={SVG_B002} alt="Categoria elétrica" />
          <NameCategoria>elétrica</NameCategoria>
        </BlockCategoria>
        <BlockCategoria id="slide-3">
          <FrameCategoria src={SVG_B003} alt="Categoria carpintaria" />
          <NameCategoria>carpintaria</NameCategoria>
        </BlockCategoria>
        <BlockCategoria id="slide-3">
          <FrameCategoria src={SVG_B004} alt="Categoria encanador" />
          <NameCategoria>encanador</NameCategoria>
        </BlockCategoria>
        <BlockCategoria id="slide-5">
          <FrameCategoria src={SVG_B005} alt="Categoria diarista" />
          <NameCategoria>diarista</NameCategoria>
        </BlockCategoria>
        <BlockCategoria id="slide-6">
          <FrameCategoria src={SVG_B006} alt="Categoria pintura" />
          <NameCategoria>pintura</NameCategoria>
        </BlockCategoria>
      </ContentCategorias>
      <WrapperIndicators>
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-1')
          }}
        />
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-2')
          }}
        />
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-3')
          }}
        />
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-4')
          }}
        />
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-5')
          }}
        />
        <DisplayIndicators
          type="radio"
          onClick={() => {
            handleClick('slide-6')
          }}
        />
      </WrapperIndicators>
    </WrapperCategorias>
  )
}
