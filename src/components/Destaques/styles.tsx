import styled from 'styled-components'
import Image from 'next/image'

interface Animation {
  inView: boolean;
}

export const WrapperDestaques =
  styled.section <
  Animation >
  `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateY(${props => (props.inView ? 0 : '2rem')});
  transition: opacity 0.6s, transform 0.6s;
`
export const HeadlineDestaques = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 1.6rem;
    font-weight: 700;
    font-style: normal;
    line-height: 2.4rem;
    color: ${props => props.theme.colors.colorB};
    text-transform: uppercase;
  }
`
export const ContentDestaques = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.colorF};
  border-radius: 2.4rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
`
export const BlockDestaques = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
  justify-content: center;

  @media (width > ${props => props.theme.screenSize.sizeMD}) {
    grid-template-columns: repeat(6, 1fr);
  }
`
export const FrameDestaque = styled.div`
  width: 100%;
  height: 10rem;
  border: solid 0.2rem ${props => props.theme.colors.colorB};
  border-radius: 0.2rem 1rem 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`
export const AssetDestaque = styled(Image)`
  width: 3rem;
  height: 3rem;
`
export const NameDestaque = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  color: ${props => props.theme.colors.colorB};
  white-space: nowrap;
  &::first-letter {
    text-transform: capitalize;
  }
`
