import styled from 'styled-components'
import { Link } from 'react-scroll'
import Image from 'next/image'

import { BsArrowDownCircleFill } from 'react-icons/bs'

export const WrapperHero = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
export const ContentHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;

  /* Configuração de Media MD (Medium)*/
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
  gap: 2.5rem;
`
export const HeroHeadline = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  /* Component DisplayTitle */
  h1 {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 3.3rem;
    text-transform: uppercase;
    text-align: left;
  }

  /* Configuração de Media MD (Medium)*/
  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.75rem;
      text-align: left;
    }
  }

  /* Configuração de Media LG (Large)*/
  @media (min-width: ${props => props.theme.screenSize.sizeLG}) {
    h1 {
      font-size: 3.4rem;
      line-height: 5.1rem;
      text-align: left;
    }
  }
`
export const SubHeroHeadline = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: self-start;
  gap: 2rem;

  overflow-y: scroll;
  scroll-behavior: smooth;
  direction: rtl;

  /* Component DisplayTypography */
  p {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    direction: ltr;
    text-align: left;
    &::first-letter {
      text-transform: capitalize;
    }
    margin-left: 1rem;
  }

  /* Component DisplayTypography */
  p {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    direction: ltr;
    text-align: left;
    &::first-letter {
      text-transform: capitalize;
    }
    margin-left: 1rem;
    direction: ltr;
  }

  /* Scrollbar Lateral SubHeroHeadline */
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.colorF};
    border-radius: 0.9rem;
  }
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.colorE};
    border-radius: 0.9rem;
  }
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
export const FrameHero = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
`
export const BackgroundFrame = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
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
    top: 10%;
    left: auto;
    right: 0;
  }
`
export const ButtonSmooth = styled(Link)`
  width: 100%;
  max-width: 26.5rem;
  margin: 0 auto;
  padding: 1.6rem;
  border-radius: 1.4rem;
  background: ${props => props.theme.colors.colorE};
  box-shadow: 0 0 0.5rem 0 ${props => props.theme.colors.colorE};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

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
  }

  cursor: pointer;
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
