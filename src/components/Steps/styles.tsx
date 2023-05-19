import Image from 'next/image'
import styled from 'styled-components'

export const WrapperSteps = styled.section`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`
export const ContentSteps = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
  }
`
export const BlockSteps = styled.div`
  width: 100%;
  display: flex;
  flex: 0 0 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;
  cursor: default;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.colorA};
  }

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    flex: 2;
  }
`
export const FrameSteps = styled(Image)`
  width: 100%;
  height: 25rem;
  object-fit: contain;
`
