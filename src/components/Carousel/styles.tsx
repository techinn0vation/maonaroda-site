import styled from 'styled-components'
import Image from 'next/image'

export const WrapperAssets = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
export const ContentAssets = styled.div`
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

  @media (width > ${props => props.theme.screenSize.sizeLG}) {
    overflow: hidden;
  }
`

export const BlockAssets = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  cursor: default;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.colorB};
  }

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    flex-direction: column;
  }
  @media (width >= ${props => props.theme.screenSize.sizeLG}) {
    flex-direction: row;
  }
`
export const FrameAssets = styled(Image)`
  width: 3.2rem;
  display: block;
`
export const WrapperIndicators = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (width >= ${props => props.theme.screenSize.sizeLG}) {
    display: none;
  }
`
export const DisplayIndicators = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  opacity: 0.5;
  appearance: none;
  background: ${props => props.theme.colors.colorE};

  &:focus {
    outline: solid 0.1rem ${props => props.theme.colors.colorE};
    outline-offset: 0.3rem;
    opacity: 1;
  }
`
