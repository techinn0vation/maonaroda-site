import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

interface Animation {
  inView: boolean;
}

export const WrapperProfissional =
  styled.section <
  Animation >
  `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateX(${props => (props.inView ? 0 : '-15rem')});
  transition: opacity 0.66s, transform 0.66s;
`
export const ContentProfissional = styled.div`
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
export const BlockProfissional = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 1;
`
export const SubHeadlineProfissional = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;

  h1 {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    text-transform: uppercase;
  }

  p {
    color: ${props => props.theme.colors.colorA};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    opacity: 0.88;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (min-width: ${props => props.theme.screenSize.sizeLG}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }
`
export const WrapperFrameProfissional = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
export const FrameProfissional = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 30vh;
  margin: 0 auto;
  object-fit: contain;

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    max-width: 100%;
    object-fit: cover;
    padding: 2rem;
  }
`
export const ButtonAccess = styled(Link)`
  width: 100%;
  max-width: 20rem;
  background: ${props => props.theme.colors.colorB};
  border-radius: 1rem;
  padding: 1.6rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${props => props.theme.colors.colorC};
    text-transform: uppercase;
  }
`
