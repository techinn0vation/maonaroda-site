import styled from 'styled-components'
import { ScrollTheme } from './ThemeScrollIndicator'

export const WrapperScroll = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 0.5rem;
  background: ${ScrollTheme};
  transition: width 0.2s ease-in-out;
  z-index: 5;
`
