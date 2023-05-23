import Banner from '../Banner'
import Text from '../Text'
import Title from '../Title'

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

import React, { useState } from 'react'

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <WrapperLogin>
      <ContentLogin>
        <HeadlineLogin>
          <Title message="login" />
        </HeadlineLogin>
        <ContentFields>
          <BlockField>
            <InputField
              placeholder="usuário"
              name="user"
              type="email"
              id="email"
            />
          </BlockField>
          <BlockField>
            <InputField
              placeholder="senha"
              name="password"
              type={showPassword ? 'text' : 'password'}
              id="password"
            />
            <TogglePasswordButton onClick={handleTogglePassword}>
              {showPassword ? <VisibleFill /> : <InvisibleFill />}
            </TogglePasswordButton>
          </BlockField>
          <ContentCheckField>
            <CheckField type="checkbox" />
            <Text message="permanecer conectado." />
          </ContentCheckField>
        </ContentFields>
        <ButtonLogin href="/login">
          <Text message="conectar" />
        </ButtonLogin>
      </ContentLogin>
      <Banner
        title="não tem um login para se conectar?"
        text="cadastre-se no app"
      />
    </WrapperLogin>
  )
}
