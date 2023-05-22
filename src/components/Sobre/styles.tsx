import Link from 'next/link'
import styled from 'styled-components'

interface Animation {
  inView: boolean;
}

export const WrapperAboutUs =
  styled.section <
  Animation >
  `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateX(${props => (props.inView ? 0 : '25rem')});
  transition: opacity 0.66s, transform 0.66s;

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    max-width: 63rem;
    margin: 0 auto;
  }
`
export const HeadlineAboutUs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 2rem;

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
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    opacity: 0.88;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (min-width: ${props => props.theme.screenSize.sizeLG}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }
`
export const ButtonAboutUs = styled(Link)`
  width: 100%;
  max-width: 25.5rem;
  margin: 0 auto;
  padding: 1.6rem;
  border-radius: 1.4rem;
  background: ${props => props.theme.colors.colorB};
  text-decoration: none;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 0 0.5rem 0 ${props => props.theme.colors.colorB};

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

  outline-offset: 0.2rem;

  transition: ease-in 0.02s;
  &:focus:active {
    transform: translateY(0.2rem);
    outline: solid ${props => props.theme.colors.colorB} 0.2rem;
  }
`
