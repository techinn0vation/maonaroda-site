import Link from 'next/link'
import styled from 'styled-components'

export const WrapperFooter = styled.footer`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  &::before {
    content: '';
    width: 100%;
    height: 0.05rem;
    background: ${props => props.theme.colors.colorA};
    opacity: 0.66;
  }
`
export const ContentFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  /* Configuração de Media MD (Medium)*/
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
  gap: 1rem;

  /* Component DisplayTitle */
  h1 {
    color: ${props => props.theme.colors.colorA};
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    opacity: 0.88;
    text-transform: uppercase;
    cursor: default;
  }
`
export const LinkFooter = styled(Link)`
  color: ${props => props.theme.colors.colorB};
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2.1rem;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
`
export const WrapperSocialField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
export const SocialField = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

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

  /* Animações em  Mídias Sociais*/
  &:nth-child(1):hover {
    transition: ease-in 0.09s;
    -webkit-transition: ease-in 0.09s;
    -o-transition: ease-in 0.09s;
    -moz-transition: ease-in 0.09s;
    color: ${props => props.theme.colors.colorB};
    border: solid ${props => props.theme.colors.colorB} 0.2rem;
    box-shadow: 0 0 0.6rem 0 ${props => props.theme.colors.colorB};
  }
  &:nth-child(2):hover {
    transition: ease-in 0.09s;
    -webkit-transition: ease-in 0.09s;
    -o-transition: ease-in 0.09s;
    -moz-transition: ease-in 0.09s;
    color: ${props => props.theme.colors.colorE};
    border: solid ${props => props.theme.colors.colorE} 0.2rem;
    box-shadow: 0 0 0.6rem 0 ${props => props.theme.colors.colorE};
  }
  &:nth-child(3):hover {
    transition: ease-in 0.09s;
    -webkit-transition: ease-in 0.09s;
    -o-transition: ease-in 0.09s;
    -moz-transition: ease-in 0.09s;
    color: ${props => props.theme.colors.colorH};
    border: solid ${props => props.theme.colors.colorH} 0.2rem;
    box-shadow: 0 0 0.6rem 0 ${props => props.theme.colors.colorH};
  }
  &:nth-child(4):hover {
    transition: ease-in 0.09s;
    -webkit-transition: ease-in 0.09s;
    -o-transition: ease-in 0.09s;
    -moz-transition: ease-in 0.09s;
    color: ${props => props.theme.colors.colorI};
    border: solid ${props => props.theme.colors.colorI} 0.2rem;
    box-shadow: 0 0 0.6rem 0 ${props => props.theme.colors.colorI};
  }
`
export const FooterLineEnd = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    color: ${props => props.theme.colors.colorA};
    text-align: center;
    opacity: 0.88;
  }
`
