import styled from 'styled-components'
import Link from 'next/link'

export const ButtonLink = styled(Link)`
  color: ${props => props.theme.colors.colorA};
  font-size: 1rem;
  font-style: normal;
  font-weight: initial;
  line-height: initial;
  text-transform: initial;
`
