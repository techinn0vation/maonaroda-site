import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { BsApple } from 'react-icons/bs'

export const WrapperBanner = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
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

  /* Configuração de Media MD (Medium)*/
  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    height: 56rem;
    &::after {
      content: '';
      width: 100%;
      background: ${props => props.theme.colors.colorB};
      clip-path: polygon(0 0, 100% 50%, 0 100%, 0% 50%);
      position: absolute;
      top: 0;
    }
  }
`
export const ContentBanner = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 1.5rem 0;
  z-index: 1;

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    flex-direction: row;
    padding: 1.5rem;
  }
`
export const BlockBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const BannerHeadline = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  /* Component DisplayTitle */
  h1 {
    color: ${props => props.theme.colors.colorC};
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
    color: ${props => props.theme.colors.colorC};
    &::first-letter {
      text-transform: capitalize;
    }
    text-align: center;
  }

  /* Configuração de Media MD (Medium)*/
  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    h1 {
      font-size: 2.3rem;
      line-height: 3.45rem;
    }
  }

  /* Configuração de Media LG (Large)*/
  @media (min-width: ${props => props.theme.screenSize.sizeLG}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }
`
export const WrapperStoreButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const ButtonStore = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;

  text-decoration: none;
  color: ${props => props.theme.colors.colorC};
  border: solid ${props => props.theme.colors.colorC} 0.1rem;
  border-radius: 1rem;

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    width: 15rem;
  }
`
export const ContentStore = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  /* Component DisplayTitle*/
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: ${props => props.theme.colors.colorC};
    &::first-letter {
      text-transform: capitalize;
    }
  }

  /* Component DisplayTypography */
  p {
    font-style: normal;
    font-weight: 700;
    font-size: 1.2rem;
    line-height: 1.8rem;
    color: ${props => props.theme.colors.colorC};
    text-transform: capitalize;
  }

  @media (max-width: ${props => props.theme.screenSize.sizeSM}) {
    /* Component DisplayTitle*/
    h1 {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 500;
    }

    /* Component DisplayTypography */
    p {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 600;
    }
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
export const WrapperFrameStore = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 2rem;
`
export const FrameStore = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: fill;
  border-radius: 1.5rem;
  box-shadow: 0 0 0.9rem 0 rgba(0, 0, 0, 0.1);
  border: solid ${props => props.theme.colors.colorF} 0.02rem;
`
