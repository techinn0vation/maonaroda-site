import styled from 'styled-components'
import Link from 'next/link'

interface Animation {
  inView: boolean;
}

export const WrapperFooter =
  styled.footer <
  Animation >
  `
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  opacity: ${props => (props.inView ? 1 : 0)};
  transform: translateY(${props => (props.inView ? 0 : '15rem')});
  transition: opacity 0.66s, transform 0.66s;

  &::before {
    content: '';
    width: 100vw;
    height: 0.05rem;
    background: ${props => props.theme.colors.colorA};
    opacity: 0.66;
  }

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    gap: 2rem;
  }
`
export const ContentFooter = styled.div`
  width: 100%;
  max-width: 102.4rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    flex-direction: row;
  }
`
export const BlockFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.6rem;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.colorB};
  }
`
export const RowBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.colorA};
  }
`
export const LinkField = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: default;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    text-transform: uppercase;
    color: ${props => props.theme.colors.colorB};
  }

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    p {
      cursor: pointer;
    }
  }
`
export const IconsFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const LinkIcon = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.colorA};
  font-size: 2rem;
  border: solid ${props => props.theme.colors.colorA} 0.2rem;
  border-radius: 100%;
  padding: 0.5rem;

  transition: ease-in 0.09s;
  text-decoration: none;

  &:focus:active {
    transform: translateY(0.2rem);
  }

  &:nth-child(1):hover {
    transition: ease-in 0.09s;
    -webkit-transition: ease-in 0.09s;
    color: ${props => props.theme.colors.colorB};
    border: solid ${props => props.theme.colors.colorB} 0.2rem;
    box-shadow: 0 0 0.6rem 0 ${props => props.theme.colors.colorB};
  }
  &:nth-child(2):hover {
    transition: ease-in 0.09s;
    -webkit-transition: ease-in 0.09s;
    color: ${props => props.theme.colors.colorE};
    border: solid ${props => props.theme.colors.colorE} 0.2rem;
    box-shadow: 0 0 0.6rem 0 ${props => props.theme.colors.colorE};
  }
  &:nth-child(3):hover {
    transition: ease-in 0.09s;
    -webkit-transition: ease-in 0.09s;
    color: ${props => props.theme.colors.colorH};
    border: solid ${props => props.theme.colors.colorH} 0.2rem;
    box-shadow: 0 0 0.6rem 0 ${props => props.theme.colors.colorH};
  }
  &:nth-child(4):hover {
    transition: ease-in 0.09s;
    -webkit-transition: ease-in 0.09s;
    color: ${props => props.theme.colors.colorI};
    border: solid ${props => props.theme.colors.colorI} 0.2rem;
    box-shadow: 0 0 0.6rem 0 ${props => props.theme.colors.colorI};
  }
`
export const SubDescriptionFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${props => props.theme.colors.colorB};
    text-transform: lowercase;
    cursor: default;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    p {
      cursor: pointer;
    }
  }
`
export const CellSubFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.1rem;
  }
`
export const ContentTextCompany = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem 0;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${props => props.theme.colors.colorA};
  }
`
