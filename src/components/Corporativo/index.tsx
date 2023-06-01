import DisplayTitle from '../Title'
import DisplayTypography from '../Typography'

import {
  ContentCorporativo,
  BlockCorporativo,
  WrapperCorporativo
} from './styles'

export default function Corporativo() {
  return (
    <WrapperCorporativo>
      <ContentCorporativo>
        <BlockCorporativo>
          <DisplayTitle DisplayTitle="quem somos" />
          <DisplayTypography
            DisplayTypography="
          nosso compromisso é proporcionar uma experiência simplificada, transparente e confiável tanto para clientes quanto para profissionais.
          Por meio de recursos intuitivos, avaliações e feedbacks, garantimos que cada interação seja satisfatória e atenda às suas expectativas,
          facilitando a resolução dos problemas domésticos e tornando sua vida mais tranquila."
          />
          <DisplayTypography
            DisplayTypography="
          além disso nosso objetivo é revolucionar a forma como os serviços domésticos são prestados,
          oferecendo conveniência, confiabilidade e qualidade em cada interação."
          />

          <DisplayTypography
            DisplayTypography="Junte-se à comunidade do Mão na roda hoje mesmo e descubra como podemos simplificar sua vida ou impulsionar sua carreira na prestação de serviços domésticos.
          Estamos aqui para ajudar você a encontrar soluções personalizadas para todas as necessidades do seu lar."
          />
        </BlockCorporativo>
        <BlockCorporativo>
          <DisplayTitle DisplayTitle="valores" />
          <DisplayTypography
            DisplayTypography="
            Excelência: Buscamos a excelência em tudo o que fazemos,
            desde a seleção cuidadosa dos profissionais até a qualidade dos serviços prestados,
            garantindo a satisfação dos clientes."
          />
          <DisplayTypography
            DisplayTypography="
            Confiança: Construímos relacionamentos baseados na confiança, tanto com clientes quanto com profissionais,
            criando um ambiente seguro e transparente para todos."
          />
          <DisplayTypography
            DisplayTypography="Inovação: Estamos constantemente em busca de soluções inovadoras para melhorar a experiência dos clientes e profissionais,
            utilizando tecnologia de ponta e práticas modernas."
          />
          <DisplayTypography
            DisplayTypography="
            Responsabilidade: Valorizamos a responsabilidade em cada interação, cuidando do bem-estar dos clientes, profissionais e comunidade,
            contribuindo para um mundo melhor."
          />
          <DisplayTypography
            DisplayTypography="
            No Mão na roda, acreditamos que cada serviço doméstico faz a diferença. Nossa plataforma conecta clientes em busca de assistência em várias categorias,
            como elétrica, marcenaria/carpintaria, hidráulica, refrigeração, diarista, higienização e muito mais, a profissionais habilidosos e confiáveis."
          />
          <DisplayTypography
            DisplayTypography="Além disso, garantimos que os serviços sejam exibidos apenas para os profissionais dentro de um raio de 30 km do cliente,
            garantindo proximidade e agilidade no atendimento."
          />
          <DisplayTypography
            DisplayTypography="
            Para os clientes, oferecemos uma maneira prática e segura de encontrar especialistas em serviços essenciais para o lar.
            Nossa ampla rede de profissionais qualificados está pronta para ajudar em cada etapa do caminho, desde pequenos reparos até projetos mais complexos."
          />
          <DisplayTypography
            DisplayTypography="
            Confie em nós para fornecer serviços de qualidade, soluções eficientes e resultados excepcionais para deixar sua casa em perfeitas condições."
          />
          <DisplayTypography
            DisplayTypography="
            Nosso compromisso é proporcionar uma experiência simplificada, transparente e confiável tanto para clientes quanto para profissionais.
          "
          />
          <DisplayTypography
            DisplayTypography="
            Por meio de recursos intuitivos, avaliações e feedbacks, garantimos que cada interação seja satisfatória e atenda às suas expectativas,
            facilitando a resolução dos problemas domésticos e tornando sua vida mais tranquila."
          />
          <DisplayTypography
            DisplayTypography="
            Junte-se à comunidade do Mão na roda hoje mesmo e descubra como podemos simplificar sua vida ou impulsionar sua carreira na prestação de serviços domésticos. 
            Estamos aqui para ajudar você a encontrar soluções personalizadas para todas as necessidades do seu lar.
          "
          />
          <DisplayTypography DisplayTypography="Conte conosco para tornar seu lar um lugar ainda melhor!" />
          <DisplayTypography DisplayTypography="Esperamos ter esclarecido todos os pontos." />
        </BlockCorporativo>
      </ContentCorporativo>
    </WrapperCorporativo>
  )
}
