import Image from 'next/image'
import styled from 'styled-components'

export const WrapperCategorias = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  background: ${props => props.theme.colors.colorF};
  border-radius: 2.4rem;
  padding: 2rem;

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    width: 100%;
    height: 50vh;
  }
`
export const HeadlineCategorias = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    white-space: nowrap;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    text-transform: uppercase;
  }

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }
  @media (width >= ${props => props.theme.screenSize.sizeLG}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }
`
export const ContentCategorias = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (width >= ${props => props.theme.screenSize.sizeLG}) {
    justify-content: center;
  }
`
export const BlockCategoria = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: solid ${props => props.theme.colors.colorB} 0.2rem;
  border-radius: 0 1rem 1rem;

  @media (width >= ${props => props.theme.screenSize.sizeLG}) {
    transition: transform 0.25s ease;
    &:hover {
      transform: scale(0.9);
      transition: transform 0.25s ease;
    }
  }
`
export const FrameCategoria = styled(Image)`
  width: 100%;
  object-fit: contain;
  display: block;
`
export const NameCategoria = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2.1rem;
  white-space: nowrap;
  color: ${props => props.theme.colors.colorB};
  &::first-letter {
    text-transform: capitalize;
  }
`
