import Banner from '../Banner'
import DisplayTitle from '../Title'
import DisplayTypography from '../Typography'

import React, { useState } from 'react'

import {
  BlockField,
  ButtonLogin,
  CheckField,
  ContentCheckField,
  ContentFields,
  ContentLogin,
  HeadlineLogin,
  InputField,
  InvisibleFill,
  TogglePasswordButton,
  VisibleFill,
  WrapperLogin
} from './styles'

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <WrapperLogin>
      <ContentLogin>
        <HeadlineLogin>
          <DisplayTitle DisplayTitle="login" />
        </HeadlineLogin>
        <ContentFields>
          <BlockField>
            <InputField
              placeholder="usuário"
              name="user"
              type="email"
              id="email"
              autoComplete="on"
            />
          </BlockField>
          <BlockField>
            <InputField
              placeholder="senha"
              name="password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="on"
            />
            <TogglePasswordButton onClick={handleTogglePassword}>
              {showPassword ? <VisibleFill /> : <InvisibleFill />}
            </TogglePasswordButton>
          </BlockField>
          <ContentCheckField>
            <CheckField type="checkbox" id="checkbox_connection" />
            <DisplayTypography DisplayTypography="permanecer conectado." />
          </ContentCheckField>
        </ContentFields>
        <ButtonLogin href="/login">
          <DisplayTypography DisplayTypography="conectar" />
        </ButtonLogin>
      </ContentLogin>
      <Banner
        title="ainda não tem um login?"
        text="baixe o app e cadastre-se!"
      />
    </WrapperLogin>
  )
}
