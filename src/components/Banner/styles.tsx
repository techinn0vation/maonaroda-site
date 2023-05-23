import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

import { BsApple } from 'react-icons/bs'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

interface Animation {
  inView: boolean;
}

export const WrapperBanner =
  styled.section <
  Animation >
  `
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    width: 100vw;
    height: 100%;
    background: ${props => props.theme.colors.colorB};
    clip-path: polygon(0% 0%, 100% 0, 100% 70%, 50% 100%, 0 70%);
    position: absolute;
    top: 0;
  }

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      background: ${props => props.theme.colors.colorB};
      clip-path: polygon(0 0, 100% 50%, 0 100%, 0% 50%);
      position: absolute;
      top: 0;
    }
  }

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateX(${props => (props.inView ? 0 : '-15rem')});
  transition: opacity 0.66s, transform 0.66s;
`
export const BlockBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 3rem;
  z-index: 1;

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    flex-direction: row;
  }
`
export const ContentBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const HeadlineBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;

  h1 {
    color: ${props => props.theme.colors.colorC};
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    text-transform: uppercase;
  }

  p {
    color: ${props => props.theme.colors.colorC};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    h1 {
      font-size: 2.3rem;
      line-height: 3.5rem;
    }
  }

  @media (min-width: ${props => props.theme.screenSize.sizeLG}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }
`
export const WrapperStore = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const BlockStore = styled(Link)`
  width: 100%;
  border: solid ${props => props.theme.colors.colorC} 0.1rem;
  border-radius: 1rem;
  padding: 0.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  transition: ease-in 0.03s;
  &:active {
    transform: translateY(0.2rem);
  }
`
export const IconGoogleStore = styled(IoLogoGooglePlaystore)`
  color: ${props => props.theme.colors.colorC};
  font-size: 3rem;
`
export const IconAppStore = styled(BsApple)`
  color: ${props => props.theme.colors.colorC};
  font-size: 3rem;
`
export const BlockTextStore = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h1 {
    color: ${props => props.theme.colors.colorC};
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  p {
    color: ${props => props.theme.colors.colorC};
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.8rem;
    text-transform: capitalize;
  }
`
export const WrapperFrameBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const BlockFrameBanner = styled.div`
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
`
export const ImageFrameBanner = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: fill;
  border-radius: 1.5rem;
  box-shadow: 0 0 0.9rem 0 rgba(0, 0, 0, 0.1);
  border: solid ${props => props.theme.colors.colorF} 0.02rem;
`
