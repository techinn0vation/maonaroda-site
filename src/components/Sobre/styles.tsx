import Link from 'next/link'
import styled from 'styled-components'

export const WrapperAboutUs = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (width >= ${props => props.theme.screenSize.sizeMD}) {
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
    color: ${props => props.theme.colors.colorG};
    font-style: normal;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.1rem;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (width >= ${props => props.theme.screenSize.sizeLG}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }
`
export const ButtonAboutUs = styled(Link)`
  width: 100%;
  max-width: 20rem;
  height: 6rem;
  background: ${props => props.theme.colors.colorB};
  border-radius: 1.3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    color: ${props => props.theme.colors.colorC};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.1rem;
    &::first-letter {
      text-transform: capitalize;
    }
  }

  text-decoration: none;
  outline-offset: 0.2rem;
  transition: ease-in 0.09s;
  &:focus:active {
    transform: translateY(0.2rem);
    outline: solid ${props => props.theme.colors.colorE} 0.2rem;
  }
`
