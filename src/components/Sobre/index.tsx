import Text from '../Text'
import Title from '../Title'
import { ButtonAboutUs, BlockTextAboutUs, WrapperAboutUs } from './styles'
import { useInView } from 'react-intersection-observer'

export default function SobreNos() {
  const { ref, inView } = useInView()

  return (
    <WrapperAboutUs ref={ref} inView={inView}>
      <BlockTextAboutUs>
        <Title message="quem somos" />
        <Text
          message="Nosso compromisso é proporcionar uma experiência simplificada, transparente e confiável tanto para clientes quanto para profissionais.
          Por meio de recursos intuitivos, avaliações e feedbacks, garantimos que cada interação seja satisfatória e atenda às suas expectativas,
          facilitando a resolução dos problemas domésticos e tornando sua vida mais tranquila."
        />
        <Text
          message="Junte-se à comunidade do Mão na roda hoje mesmo e descubra como podemos simplificar sua vida ou impulsionar sua carreira na prestação de serviços domésticos.
         Estamos aqui para ajudar você a encontrar soluções personalizadas para todas as necessidades do seu lar."
        />
        <ButtonAboutUs href="#">
          <Text message="saber mais" />
        </ButtonAboutUs>
      </BlockTextAboutUs>
    </WrapperAboutUs>
  )
}
