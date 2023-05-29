import Image from 'next/image'
import styled from 'styled-components'

export const WrapperIdentification = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
export const ContentIdentification = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  z-index: 1;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    max-height: 75%;
    position: absolute;
    bottom: 0;
    background: ${props => props.theme.colors.colorF};
    border-radius: 2rem;
  }

  /* Configuração de Media MD (Medium)*/
  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    flex-direction: row;

    &::before {
      content: '';
      width: 100%;
      max-width: 75%;
      margin: 0 auto;
      height: 100%;
      max-height: 100%;
      position: absolute;
      bottom: 0;
      left: auto;
      right: 0;
      background: ${props => props.theme.colors.colorF};
      border-radius: 2rem;
    }
  }
`
export const ImageIdentification = styled(Image)`
  width: 100%;
  padding: 2rem;
  height: auto;
  object-fit: cover;
  border-radius: 3rem;

  /* Configuração de Media LG (Large)*/
  @media (min-width: ${props => props.theme.screenSize.sizeLG}) {
    max-width: 90%;
    padding: 2rem;
  }
`
export const BlockIdentification = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 1;
`
export const HeadlineIdentification = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  /* Component DisplayTitle */
  h1 {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    text-transform: uppercase;
    text-align: center;
  }

  /* Component DisplayTypography */
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${props => props.theme.colors.colorA};
    opacity: 0.88;
    &::first-letter {
      text-transform: capitalize;
    }
    text-align: center;
  }

  /* Configuração de Media LG (Large)*/
  @media (min-width: ${props => props.theme.screenSize.sizeLG}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }
`
export const ButtonIdentification = styled.button`
  width: auto;
  background: ${props => props.theme.colors.colorB};
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  cursor: pointer;

  /* Component DisplayTypography */
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${props => props.theme.colors.colorC};
    text-transform: capitalize;
  }
`
