import styled from 'styled-components'
import Image from 'next/image'

export const WrapperHero = styled.header`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const FrameBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: banner 1s ease 0s 1 normal forwards;
  @keyframes banner {
    0% {
      opacity: 0;
      transform: translateX(-2.5rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
export const BackgroundHero = styled(Image)`
  width: 100%;
  min-width: 100vw;
  height: 100%;

  filter: brightness(55.5%);
`
export const ContentHero = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    font-style: normal;
    line-height: 2.4rem;
    color: ${props => props.theme.colors.colorC};
    text-transform: uppercase;

    &:nth-of-type(2) {
      font-size: 1.4rem;
      line-height: 2.1rem;
      font-weight: 500;
    }

    @media (width > ${props => props.theme.screenSize.sizeMD}) {
      &:nth-of-type(1) {
        font-size: 2.8rem;
        line-height: 4.2rem;
      }
      &:nth-of-type(2) {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
    }

    @media (width > ${props => props.theme.screenSize.sizeLG}) {
      &:nth-of-type(1) {
        font-size: 4.8rem;
        line-height: 7.2rem;
      }
      &:nth-of-type(2) {
        font-size: 3rem;
        line-height: 4.5rem;
      }
    }

    animation: text 1.6s ease 0s 1 normal forwards;
    @keyframes text {
      0% {
        opacity: 0;
        transform: translateX(-2.5rem);
      }

      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`
