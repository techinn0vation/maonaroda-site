import Image from 'next/image'
import styled from 'styled-components'

import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill
} from 'react-icons/bs'

interface Animation {
  inView: boolean;
}

export const WrapperStepByStep =
  styled.section <
  Animation >
  `
  width: 100%;
  min-width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: relative;
  background: ${props => props.theme.colors.colorF};

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateX(${props => (props.inView ? 0 : '25rem')});
  transition: opacity 0.66s, transform 0.66s;
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

  h1 {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    text-transform: uppercase;
  }

  p {
    color: ${props => props.theme.colors.colorA};
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    text-transform: uppercase;
    opacity: 0.88;
  }

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
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

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
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
  transition: transform 0.3s ease-in-out;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
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
  width: auto;
  height: auto;
  box-shadow: 0 0 0.9rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 1.6rem;
  object-fit: contain;

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
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

  p {
    color: ${props => props.theme.colors.colorA};
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    opacity: 0.88;
  }
`
export const ToggleLeft = styled(BsFillArrowLeftSquareFill)`
  color: ${props => props.theme.colors.colorB};
  font-size: 3rem;
`
export const ToggleRight = styled(BsFillArrowRightSquareFill)`
  color: ${props => props.theme.colors.colorB};
  font-size: 3rem;
`
