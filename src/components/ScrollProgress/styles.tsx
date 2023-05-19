import styled from 'styled-components'

export const WrapperScroll = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 0.5rem;
  background: linear-gradient(
    90deg,
    rgba(98, 60, 234, 1) 25%,
    rgba(25, 104, 255, 1) 50%,
    rgba(75, 25, 255, 1) 100%
  );
  transition: width 0.2s ease-in-out;
  z-index: 3;
`
