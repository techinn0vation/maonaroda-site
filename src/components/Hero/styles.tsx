import styled from 'styled-components'
import Image from 'next/image'

import { BsFillArrowDownCircleFill } from 'react-icons/bs'

interface Animation {
  inView: boolean;
}

export const WrapperHero =
  styled.header <
  Animation >
  `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateX(${props => (props.inView ? 0 : '-25rem')});
  transition: opacity 0.66s, transform 0.66s;
`
export const BlockHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
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
  gap: 2.5rem;
`
export const HeadlineHero = styled.div`
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
      font-size: 3.5rem;
      line-height: 5.2rem;
    }
  }
`
export const SubHeadlineHero = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.5rem;
  text-align: left;
  overflow-y: scroll;
  scroll-behavior: smooth;
  direction: rtl;

  p {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    margin-left: 1rem;
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
    height: auto;
    overflow: hidden;

    @media (width >= ${props => props.theme.screenSize.sizeMD}) {
      margin: 3rem 0;
    }
  }
`
export const DisplayMark = styled.span`
  color: ${props => props.theme.colors.colorB};
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.1rem;
  margin-left: 0.9rem;
  direction: ltr;
`
export const TextMark = styled.span`
  color: ${props => props.theme.colors.colorE};
  font-weight: 700;
`
export const ButtonDownload = styled.button`
  width: 100%;
  border-radius: 1rem;
  padding: 1.5rem;
  background: ${props => props.theme.colors.colorE};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  outline-offset: 0.2rem;

  transition: ease-in 0.09s;
  &:focus:active {
    transform: translateY(0.2rem);
    outline: solid ${props => props.theme.colors.colorE} 0.2rem;
  }

  p {
    color: ${props => props.theme.colors.colorC};
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    width: 30rem;
    cursor: pointer;
  }
`
export const BsArrowIcon = styled(BsFillArrowDownCircleFill)`
  color: ${props => props.theme.colors.colorC};
  font-size: 1.6rem;
  outline: solid ${props => props.theme.colors.colorC} 0.1rem;
  border-radius: 100%;
  padding: 0.09rem;
`
export const ContentFrame = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  position: relative;

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`
export const BackgroundFrame = styled(Image)`
  width: 100%;
  height: 100%;
  box-shadow: 1rem -1rem 0 0 ${props => props.theme.colors.colorE};
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
