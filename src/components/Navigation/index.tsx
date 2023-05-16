import { useState } from 'react'
import Logo from '..//..//..//public/img/Logo.png'

import {
  ButtonOpen,
  ButtonClose,
  ContentLinks,
  DisplayLink,
  WrapperNavigation,
  WrapperSidebar,
  ContentButtons,
  LogoBranding,
  IconLogin
} from './styles'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  function triggerButton() {
    setIsOpen(!isOpen)
  }
  return (
    <WrapperNavigation>
      <LogoBranding src={Logo} alt="Mão na roda-Logo" />
      <WrapperSidebar>
        <ContentButtons onClick={triggerButton}>
          {isOpen ? <ButtonClose /> : <ButtonOpen />}
        </ContentButtons>
        <ContentLinks isOpen={isOpen}>
          <DisplayLink href="/">home</DisplayLink>
          <DisplayLink href="/">blog</DisplayLink>
          <DisplayLink href="/">sobre nós</DisplayLink>
          <DisplayLink href="/">solicitar serviços</DisplayLink>
          <DisplayLink href="/">
            <IconLogin />
            login
          </DisplayLink>
        </ContentLinks>
      </WrapperSidebar>
    </WrapperNavigation>
  )
}
