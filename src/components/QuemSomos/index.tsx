import DisplayTitle from '../Title'
import DisplayTypography from '../Typography'

import {
  ButtonQuemSomos,
  ContentQuemSomos,
  HeadlineQuemSomos,
  WrapperQuemSomos,
  WrapperText
} from './styles'

export default function QuemSomos() {
  return (
    <WrapperQuemSomos>
      <ContentQuemSomos>
        <HeadlineQuemSomos>
          <DisplayTitle DisplayTitle="quem somos" />
        </HeadlineQuemSomos>
        <WrapperText>
          <DisplayTypography
            DisplayTypography="nosso compromisso é proporcionar uma experiência simplificada, transparente e confiável tanto para clientes quanto para profissionais.
            Por meio de recursos intuitivos, avaliações e feedbacks, garantimos que cada interação seja satisfatória e atenda às suas expectativas,
            facilitando a resolução dos problemas domésticos e tornando sua vida mais tranquila."
          />
          <DisplayTypography
            DisplayTypography="
            Junte-se à comunidade do Mão na roda hoje mesmo e descubra como podemos simplificar sua vida ou impulsionar sua carreira na prestação de serviços domésticos.
            Estamos aqui para ajudar você a encontrar soluções personalizadas para todas as necessidades do seu lar."
          />
        </WrapperText>
        <ButtonQuemSomos href="/sobre">
          <DisplayTypography DisplayTypography="saber mais" />
        </ButtonQuemSomos>
      </ContentQuemSomos>
    </WrapperQuemSomos>
  )
}
