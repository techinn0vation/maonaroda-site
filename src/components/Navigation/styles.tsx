import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

import { HiMenuAlt1 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

interface sideBar {
  isOpen: boolean
}

export const WrapperNavigation = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const LogoBranding = styled(Image)`
  width: 100%;
  max-width: 10rem;
  height: 6rem;
  display: block;
  margin: 0;
`
export const WrapperSidebar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`
export const ContentLinks = styled.div<sideBar>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  position: relative;

  @media (width <= ${props => props.theme.screenSize.sizeLG}) {
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.colorC};
    position: fixed;
    top: 0;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    transition: left 0.3s ease-in-out;
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 3rem;
    z-index: 99;
  }
`
export const DisplayLink = styled(Link)`
  color: ${props => props.theme.colors.colorD};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  &::first-letter {
    text-transform: capitalize;
  }
  text-decoration: none;
  cursor: pointer;
  margin-left: 1rem;
  position: relative;
  &:hover {
    color: ${props => props.theme.colors.colorB};
  }

  transition: ease-in 0.03s;
  &:active {
    transform: translateY(0.2rem);
  }

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.colorB};
    animation: underline 0.3s ease-out forwards;
  }

  @keyframes underline {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }

  &:nth-of-type(5) {
    width: 9rem;
    padding: 0.2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    background: ${props => props.theme.colors.colorE};
    color: ${props => props.theme.colors.colorC};
    border-radius: 1.5rem;

    &:hover::after {
      background: transparent;
    }
  }
`
export const ContentButtons = styled.div`
  z-index: 999;

  @media (width > ${props => props.theme.screenSize.sizeLG}) {
    display: none;
  }
`
export const ButtonOpen = styled(HiMenuAlt1)`
  font-size: 2.4rem;
  color: ${props => props.theme.colors.colorA};
`
export const ButtonClose = styled(IoClose)`
  font-size: 2.4rem;
  color: ${props => props.theme.colors.colorA};
`
