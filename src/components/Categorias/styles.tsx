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
  padding: 1.5rem;

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    padding: 8rem;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  gap: 2rem;

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    grid-template-columns: repeat(6, 1fr);
    white-space: nowrap;
    max-width: 30rem;
    margin: 0 auto;
  }
`
export const BlockCategoria = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border: solid ${props => props.theme.colors.colorB} 0.2rem;
  border-radius: 0 1rem 1rem;

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    width: 9.7rem;
  }
`
export const FrameCategoria = styled(Image)`
  width: 100%;
`
export const NameCategoria = styled.span`
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2.1rem;
  color: ${props => props.theme.colors.colorB};
  &::first-letter {
    text-transform: capitalize;
  }
`
