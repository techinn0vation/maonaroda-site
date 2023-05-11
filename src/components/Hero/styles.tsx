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
`
export const BlockHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
  animation: left 0.5s ease 0s 1 normal forwards;
  @keyframes left {
    0% {
      opacity: 0;
      transform: translateX(-25rem);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &:nth-child(2) {
    animation: right 0.5s ease 0s 1 normal forwards;
    @keyframes right {
      0% {
        opacity: 0;
        transform: translateX(25rem);
      }

      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
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
  height: 10.5rem;
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
    overflow: hidden;
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
  outline-offset: 4px;

  transition: ease-in 0.03s;
  &:active {
    transform: translateY(0.2rem);
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
export const WrapperAssets = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  animation: center 0.5s ease 0s 1 normal forwards;
  @keyframes center {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }

  @media (width > ${props => props.theme.screenSize.sizeMD}) {
    grid-template-columns: repeat(7, 1fr);
  }
`
export const BlockAssets = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.colorB};
  }
`
export const FrameAssets = styled(Image)`
  width: 100%;
  display: block;
`
