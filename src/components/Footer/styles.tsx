import Link from 'next/link'
import styled from 'styled-components'

export const WrapperFooter = styled.footer`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  justify-content: center;
  align-items: center;
`
export const ContentFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const BlockFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  h1 {
    color: ${props => props.theme.colors.colorA};
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.1rem;
    text-transform: uppercase;
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
`
