import Image from 'next/image'
import styled from 'styled-components'

export const WrapperTips = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
export const HeadlineTips = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;

  h1 {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    text-transform: uppercase;
  }

  p {
    color: ${props => props.theme.colors.colorG};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }
  @media (width >= ${props => props.theme.screenSize.sizeLG}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }
`
export const ContentTips = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
    flex-direction: row;
  }
`
export const BlockTips = styled.div`
  width: 100%;
  height: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const ContentFrameTips = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FrameImageTips = styled(Image)`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  margin: 0;
`
export const ContentInfoTips = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
`
export const SloganInfoTips = styled.p`
  color: ${props => props.theme.colors.colorG};
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2.1rem;
  text-transform: capitalize;
`
export const DividerSlogan = styled.div`
  border: 0.1rem solid ${props => props.theme.colors.colorG};
  height: 2rem;
  width: 0;
`
export const DescriptionTips = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;

  p {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    &::first-letter {
      text-transform: capitalize;
    }

    &:nth-child(2) {
      color: ${props => props.theme.colors.colorG};
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.1rem;
    }
  }
`
