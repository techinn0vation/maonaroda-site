import styled from 'styled-components'
import Link from 'next/link'

import { BsEye, BsEyeSlash } from 'react-icons/bs'

export const WrapperLogin = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`
export const ContentLogin = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${props => props.theme.screenSize.sizeMD}) {
    max-width: 50%;
    margin: 0 auto;
  }
`
export const BlockField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  &:nth-child(2) {
    position: relative;
  }
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

  @media (min-width: ${props => props.theme.screenSize.sizeLG}) {
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
  border-radius: 0.9rem;
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
    opacity: 0.88;
  }
`
export const TogglePasswordButton = styled.div`
  position: absolute;
  top: 50%;
  left: 90%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const VisibleFill = styled(BsEye)`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.colorB};
`
export const InvisibleFill = styled(BsEyeSlash)`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.colorB};
`
export const ButtonLogin = styled(Link)`
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
  padding: 1.6rem;
  border-radius: 1.4rem;
  background: ${props => props.theme.colors.colorB};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  box-shadow: 0 0 0.4rem 0 ${props => props.theme.colors.colorB};

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

  text-decoration: none;
  transition: ease-in 0.02s;
  &:focus:active {
    transform: translateY(0.2rem);
  }
`
export const ContentCheckField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin-left: 0.5rem;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.9rem;
    opacity: 0.77;
    color: ${props => props.theme.colors.colorA};
    &::first-letter {
      text-transform: uppercase;
    }
  }
`
export const CheckField = styled.input`
  appearance: none;
  width: 1.8rem;
  height: 1.8rem;
  border: 0.1rem solid ${props => props.theme.colors.colorB};
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: all ease-in 0.2s;

  &:checked {
    background-color: ${props => props.theme.colors.colorB};
  }

  &:checked::before {
    content: '✔';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.theme.colors.colorF};
    font-size: 1.2rem;
  }
`
