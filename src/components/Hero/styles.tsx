import styled from 'styled-components'
import Image from 'next/image'

import { BsArrowDownCircleFill } from 'react-icons/bs'

interface Animation {
  inView: boolean;
}

export const WrapperHero =
  styled.header <
  Animation >
  `
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  gap: 5rem;

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateZ(${props => (props.inView ? 0 : '15rem')});
  transition: opacity 0.66s, transform 0.66s;
`

export const ContentHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    flex-direction: row;
  }
`

export const BlockHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`

export const HeadlineHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2.5rem;

  h1 {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 700;
    font-size: 2.3rem;
    line-height: 3.45rem;
    text-transform: uppercase;
  }

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }

  @media (min-width: ${props => props.theme.screenSize.sizeLG}) {
    h1 {
      font-size: 3.4rem;
      line-height: 5.1rem;
    }
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
  direction: rtl;
  text-align: left;
  overflow-y: scroll;
  scroll-behavior: smooth;

  p {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    margin-left: 1rem;
    direction: ltr;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  &::-webkit-scrollbar {
    max-width: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.colorF};
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.colorE};
    border-radius: 1rem;
  }
`

export const HeroFrame = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  position: relative;

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const BackgroundFrame = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: fill;
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

export const ButtonHero = styled.button`
  width: 100%;
  max-width: 25.5rem;
  margin: 0 auto;
  padding: 1.6rem;
  border-radius: 1.4rem;
  background: ${props => props.theme.colors.colorE};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 0 0.5rem 0 ${props => props.theme.colors.colorE};

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${props => props.theme.colors.colorC};
    &::first-letter {
      text-transform: capitalize;
    }
  }

  transition: ease-in 0.03s;
  &:active {
    transform: translateY(0.2rem);
  }
`

export const BsArrowDown = styled(BsArrowDownCircleFill)`
  color: ${props => props.theme.colors.colorC};
  font-size: 1.6rem;
  border: solid ${props => props.theme.colors.colorC} 0.1rem;
  border-radius: 100%;
  padding: 0.09rem;
`

export const RowItalicizedText = styled.p`
  color: ${props => props.theme.colors.colorB};
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.1rem;
`

export const ItalicizedText = styled.span`
  font-weight: 600;
  margin-right: 0.3rem;
  color: ${props => props.theme.colors.colorE};
`
