import styled from 'styled-components'
import Image from 'next/image'

import { BsFillArrowDownCircleFill } from 'react-icons/bs'

export const WrapperHero = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  animation: heroAnim 0.9s ease 0s 1 normal forwards;
  @keyframes heroAnim {
    0% {
      transform: scaleX(0);
    }

    100% {
      transform: scaleX(1);
    }
  }
`
export const BlockHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (width > ${props => props.theme.screenSize.sizeMD}) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const ContentHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
export const HeadlineHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: left;

  h1 {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3.75rem;
    text-transform: uppercase;
  }
`
export const SubHeadlineHero = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  text-align: left;
  overflow-y: scroll;
  direction: rtl;

  p {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.1rem;
    margin-left: 0.9rem;
  }
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.colorF};
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.colorE};
    border-radius: 1rem;
  }

  &:nth-child(n + 3) {
    height: auto;
    overflow: hidden;

    @media (width > ${props => props.theme.screenSize.sizeMD}) {
      margin: 3rem 0;
    }
  }
`
export const DisplayMark = styled.span`
  color: ${props => props.theme.colors.colorB};
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2.1rem;
  margin-left: 0.9rem;
  direction: ltr;
`
export const TextMark = styled.span`
  color: ${props => props.theme.colors.colorE};
  font-weight: 800;
`
export const ButtonDownload = styled.button`
  width: 100%;
  border-radius: 1rem;
  height: 5.5rem;
  background: ${props => props.theme.colors.colorE};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  outline-offset: 0.2rem;

  transition: ease-in 0.06s;
  &:focus:active {
    transform: translateY(0.2rem);
    outline: solid ${props => props.theme.colors.colorE} 0.2rem;
  }

  p {
    color: ${props => props.theme.colors.colorC};
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.1rem;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (width > ${props => props.theme.screenSize.sizeLG}) {
    width: 40rem;
    height: 5rem;
    cursor: pointer;
  }
`
export const BsArrowIcon = styled(BsFillArrowDownCircleFill)`
  color: ${props => props.theme.colors.colorC};
  font-size: 2rem;
`
export const ContentFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1.5rem;

  @media (width > ${props => props.theme.screenSize.sizeLG}) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const BackgroundFrame = styled(Image)`
  width: 100%;
  height: 20.5rem;
  box-shadow: 1rem -1rem 0 0 ${props => props.theme.colors.colorE};

  @media (width > ${props => props.theme.screenSize.sizeSM}) {
    height: auto;
  }
`
export const FrameFloating = styled.div`
  width: 7rem;
  height: 5rem;
  position: absolute;
  background: ${props => props.theme.colors.colorG};
  box-shadow: 0 0.3rem 0 rgba(0, 0, 0, 0.097);
  left: 0;
  bottom: 15%;

  &:nth-of-type(2) {
    top: 20%;
    left: auto;
    right: 0;
  }
`
