import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

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

  @media (width > ${props => props.theme.screenSize.sizeMD}) {
    overflow: hidden;
  }
`

export const BlockAssets = styled.div`
  width: 100%;
  flex: 1 0 45%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.colorB};
  }

  @media (width > ${props => props.theme.screenSize.sizeMD}) {
    flex: 1;
  }
`
export const FrameAssets = styled(Image)`
  width: 3.5rem;
  display: block;
`
export const WrapperIndicators = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (width > ${props => props.theme.screenSize.sizeLG}) {
    display: none;
  }
`
export const DisplayIndicators = styled(Link)`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 100%;
  background: ${props => props.theme.colors.colorE};
  opacity: 0.75;
  transition: opacity easy 250ms;

  &:focus {
    opacity: 1;
  }
`
