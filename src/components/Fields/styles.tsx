import styled from 'styled-components'
import Image from 'next/image'

export const WrapperSlide = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const ContentSlide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
  }
`
export const BlockSlide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  cursor: default;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.colorB};
  }
`
export const FrameSlideImage = styled(Image)`
  width: 3.8rem;
  object-fit: fill;
  margin: 0;
`
export const WrapperIndicators = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (width >= ${props => props.theme.screenSize.sizeLG}) {
    /* display: none; */
  }
`
export const DisplayIndicators = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  opacity: 0.5;
  appearance: none;
  background: ${props => props.theme.colors.colorE};

  &:focus {
    outline: solid 0.1rem ${props => props.theme.colors.colorE};
    outline-offset: 0.3rem;
    opacity: 1;
  }
`
