import Title from '../Title'

import {
  BlockField,
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
              name="usuario"
              type="email"
              id="email"
            />
          </BlockField>
          <BlockField>
            <InputField
              placeholder="senha"
              name="senha"
              type={showPassword ? 'text' : 'password'} // Alterna entre 'text' e 'password' com base no estado
              id="senha"
            />
          </BlockField>
        </ContentFields>
        <TogglePasswordButton onClick={handleTogglePassword}>
          {showPassword ? <VisibleFill /> : <InvisibleFill />}
        </TogglePasswordButton>
      </ContentLogin>
    </WrapperLogin>
  )
}
