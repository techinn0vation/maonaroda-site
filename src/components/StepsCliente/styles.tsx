import Image from 'next/image'
import styled from 'styled-components'

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill
} from 'react-icons/bs'

export const WrapperStepByStep = styled.section`
  width: 100%;
  min-width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: ${props => props.theme.colors.colorF};

  /* Configuração de Media MD (Medium)*/
  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    min-width: 100%;
  }
`
export const HeadlineStepByStep = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
  z-index: 1;
  padding: 2rem;

  /* Component DisplayTitle */
  h1 {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    text-transform: uppercase;
  }

  /* Component DisplayTypography */
  p {
    color: ${props => props.theme.colors.colorA};
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    text-transform: uppercase;
    opacity: 0.88;
  }

  /* Configuração de Media MD (Medium)*/
  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }
`
export const ContentStepByStep = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  z-index: 1;
  padding: 2rem;

  /* Configuração de Media MD (Medium)*/
  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    max-width: 36rem;
    margin: 0 auto;
  }
`
export const BlockStepByStep = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;

  overflow-x: scroll;
  transition: transform 0.2s ease-in-out;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`
export const WrapperFrameStepByStep = styled.div`
  width: 100%;
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
  gap: 2rem;
  padding: 1rem;
`
export const FrameStepByStep = styled(Image)`
  width: 90%;
  height: auto;
  box-shadow: 0 0 0.9rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 1.6rem;
  object-fit: contain;

  /* Configuração de Media MD (Medium)*/
  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    height: 45rem;
    object-fit: contain;
  }
`
export const InformStepByStep = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* Component DisplayTypography */
  p {
    color: ${props => props.theme.colors.colorA};
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    opacity: 0.88;
    &::first-letter {
      text-transform: capitalize;
    }
  }
`
export const ToggleLeft = styled(BsFillArrowLeftSquareFill)`
  color: ${props => props.theme.colors.colorB};
  font-size: 3rem;
  cursor: pointer;
  transition: ease-in 0.03s;
  &:active {
    transform: translateY(0.2rem);
  }
`
export const ToggleRight = styled(BsFillArrowRightSquareFill)`
  color: ${props => props.theme.colors.colorB};
  font-size: 3rem;
  cursor: pointer;
  transition: ease-in 0.03s;
  &:active {
    transform: translateY(0.2rem);
  }
`
