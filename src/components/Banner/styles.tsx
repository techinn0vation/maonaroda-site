import Image from 'next/image'
import styled from 'styled-components'

import { BsApple } from 'react-icons/bs'
import { IoLogoGooglePlaystore } from 'react-icons/io5'

export const WrapperBanner = styled.section`
  width: 100%;
  min-width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 50vh;
    background: ${props => props.theme.colors.colorF};
    position: absolute;
    top: 0;
  }

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    &::before {
      content: '';
      width: 100%;
      height: 70vh;
      background: ${props => props.theme.colors.colorF};
      position: absolute;
      top: 0;
    }
  }
`
export const ContentBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  z-index: 999;

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    max-width: 102.4rem;
    flex-direction: row;
    padding: 2rem;
  }
`
export const BlockBanner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
export const HeadlineBanner = styled.div`
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
    color: ${props => props.theme.colors.colorG};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
    text-align: left;
  }

  @media (width >= ${props => props.theme.screenSize.sizeLG}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
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
export const FrameBanner = styled(Image)`
  width: 100%;
  max-width: 45%;
  margin: 0 auto;
  height: auto;

  &:nth-of-type(1) {
    margin-top: 5rem;
  }
`
export const DownloadInfoStore = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const BlockInfoStore = styled.div`
  width: 100%;
  border: solid 0.1rem ${props => props.theme.colors.colorB};
  border-radius: 0.6rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const DescriptionInfoStore = styled.div`
  width: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;

  p {
    color: ${props => props.theme.colors.colorB};
    text-transform: capitalize;
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;

    &:nth-child(2) {
      font-style: normal;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 2.1rem;
    }
  }
`
export const IconStoreApple = styled(BsApple)`
  color: ${props => props.theme.colors.colorB};
  font-size: 2.8rem;
`
export const IconStoreGoogle = styled(IoLogoGooglePlaystore)`
  color: ${props => props.theme.colors.colorB};
  font-size: 2.8rem;
`
