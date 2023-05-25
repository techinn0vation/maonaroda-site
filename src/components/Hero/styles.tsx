import styled from 'styled-components'

export const WrapperHero = styled.header`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
`
export const ContentHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`
export const BlockHero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`
export const HeroHeadline = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: center;

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
export const SubHeroHeadline = styled.div`
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 2rem;

  overflow-y: scroll;
  scroll-behavior: smooth;
  direction: rtl;

  p {
    color: ${props => props.theme.colors.colorB};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    direction: ltr;
    &::first-letter {
      text-transform: capitalize;
    }
    margin-left: 1rem;
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
