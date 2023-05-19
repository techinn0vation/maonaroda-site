import styled from 'styled-components'

import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

export const WrapperLogin = styled.section`
  width: 100%;
  display: gird;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
`
export const ContentLogin = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const BlockField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const HeadlineLogin = styled.div`
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

  @media (width >= ${props => props.theme.screenSize.sizeLG}) {
    h1 {
      font-size: 2.5rem;
      line-height: 3.7rem;
    }
  }
`
export const ContentFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`
export const InputField = styled.input`
  width: 100%;
  background: ${props => props.theme.colors.colorF};

  color: ${props => props.theme.colors.colorA};
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.1rem;
  opacity: 0.88;
  text-align: left;

  caret-color: ${props => props.theme.colors.colorB};
  padding: 1.6rem;
  outline: none;
  border-radius: 1.2rem;
  border-left: solid ${props => props.theme.colors.colorB} 2rem;
  animation: load 0.6s linear;
  transition: all 0.4s;
  @keyframes load {
    0% {
      border-left: solid ${props => props.theme.colors.colorF} 0;
    }
    100% {
      border-left: solid ${props => props.theme.colors.colorB} 2rem;
    }
  }
  &:focus {
    background: ${props => props.theme.colors.colorG};
  }

  &::placeholder {
    text-transform: uppercase;
    font-size: 1.2rem;
    line-height: 1.8rem;
    opacity: 0.55;
  }
`
export const TogglePasswordButton = styled.div``
export const VisibleFill = styled(BsFillEyeFill)``
export const InvisibleFill = styled(BsFillEyeSlashFill)``
