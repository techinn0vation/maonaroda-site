import Layout from '@/components/Layout'
import { useInView } from 'react-intersection-observer'
import { WrapperAboutUs, BlockTextAboutUs } from '@/components/Sobre/styles'
import Title from '@/components/Title'
import Text from '@/components/Text'
import SettingsSeo from '@/components/Seo'

export default function Sobre() {
  const { ref, inView } = useInView()

  return (
    <Layout>
      <SettingsSeo
        title="Mão na roda - Sobre"
        description="Pagina sobre a empresa Mão na roda"
        keywords="Empresa, História, Missão, Experiência, Compromisso, Diferenciais, Visão, Valores, Excelência"
      />

      <WrapperAboutUs ref={ref} inView={inView}>
        <BlockTextAboutUs>
          <Title message="visão" />
          <Text
            message="Nosso objetivo é revolucionar a forma como os serviços domésticos são prestados,
           oferecendo conveniência, confiabilidade e qualidade em cada interação."
          />
        </BlockTextAboutUs>
        {/* Blank Line Divider */}
        <BlockTextAboutUs>
          <Title message="missão" />
          <Text
            message="Nosso propósito é simplificar a vida das pessoas, conectando clientes que buscam serviços especializados a profissionais qualificados,
          garantindo soluções eficientes e superando as expectativas."
          />
        </BlockTextAboutUs>
        {/* Blank Line Divider */}
        <BlockTextAboutUs>
          <Title message="valores" />
          <Text
            message="Excelência: Buscamos a excelência em tudo o que fazemos, desde a seleção cuidadosa dos profissionais até a qualidade dos serviços prestados, garantindo a satisfação dos clientes.
            Confiança: Construímos relacionamentos baseados na confiança, tanto com clientes quanto com profissionais, criando um ambiente seguro e transparente para todos.
            Inovação: Estamos constantemente em busca de soluções inovadoras para melhorar a experiência dos clientes e profissionais, utilizando tecnologia de ponta e práticas modernas.
            Responsabilidade: Valorizamos a responsabilidade em cada interação, cuidando do bem-estar dos clientes, profissionais e comunidade, contribuindo para um mundo melhor."
          />
          <Text
            message="No Mão na roda, acreditamos que cada serviço doméstico faz a diferença.
            Nossa plataforma conecta clientes em busca de assistência em várias categorias,
            como elétrica, marcenaria/carpintaria, hidráulica, refrigeração, diarista, higienização e muito mais,
            a profissionais habilidosos e confiáveis. Além disso, garantimos que os serviços sejam exibidos apenas para os profissionais dentro de um raio de 30 km do cliente,
            garantindo proximidade e agilidade no atendimento."
          />
          <Text
            message="Para os clientes, oferecemos uma maneira prática e segura de encontrar especialistas em serviços essenciais para o lar.
            Nossa ampla rede de profissionais qualificados está pronta para ajudar em cada etapa do caminho, desde pequenos reparos até projetos mais complexos.
            Confie em nós para fornecer serviços de qualidade, soluções eficientes e resultados excepcionais para deixar sua casa em perfeitas condições."
          />
          <Text
            message="Nosso compromisso é proporcionar uma experiência simplificada, transparente e confiável tanto para clientes quanto para profissionais.
          Por meio de recursos intuitivos, avaliações e feedbacks, garantimos que cada interação seja satisfatória e atenda às suas expectativas,
          facilitando a resolução dos problemas domésticos e tornando sua vida mais tranquila.
          "
          />
          <Text
            message="Junte-se à comunidade do Mão na roda hoje mesmo e descubra como podemos simplificar sua vida ou impulsionar sua carreira na prestação de serviços domésticos.
           Estamos aqui para ajudar você a encontrar soluções personalizadas para todas as necessidades do seu lar."
          />
          <Text message="Conte conosco para tornar seu lar um lugar ainda melhor!" />
          <Text message="Esperamos ter esclarecido todos os pontos" />
        </BlockTextAboutUs>
      </WrapperAboutUs>
    </Layout>
  )
}
