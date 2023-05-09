import styled from 'styled-components'

interface PropButton {
  button: string
  color?: string
  size?: string
  href: string
}

export const DisplayButton = styled.button<PropButton>`
  width: auto;
  color: ${props => props.color ?? props.theme.colors.colorA};
  font-size: ${props =>
    props.size === 'small'
      ? '1.4rem'
      : props.size === 'medium'
      ? '1.6rem'
      : ''};
  font-style: normal;
  font-weight: initial;
  line-height: initial;
`
