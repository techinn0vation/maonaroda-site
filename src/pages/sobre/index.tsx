import Layout from '@/components/Layout'
import { useInView } from 'react-intersection-observer'
import { WrapperAboutUs, HeadlineAboutUs } from '@/components/Sobre/styles'
import Title from '@/components/Title'
import Text from '@/components/Text'
import SettingsSeo from '@/components/Seo'

export default function Sobre() {
  const { ref, inView } = useInView()

  return (
    <Layout>
      <SettingsSeo
        title="Mão na roda - Sobre"
        description="Descrição da minha página"
        keywords="palavras-chave, separadas, por, vírgulas"
      />

      <WrapperAboutUs ref={ref} inView={inView}>
        <HeadlineAboutUs>
          <Title message="quem somos" />
          <Text message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium quasi exercitationem reprehenderit sint id provident voluptas ab dolore ipsam nesciunt eos voluptatum, labore quod asperiores explicabo odio tenetur doloremque!" />
          <Text message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium quasi exercitationem reprehenderit sint id provident voluptas ab dolore ipsam nesciunt eos voluptatum, labore quod asperiores explicabo odio tenetur doloremque!" />
          <Text message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium quasi exercitationem reprehenderit sint id provident voluptas ab dolore ipsam nesciunt eos voluptatum, labore quod asperiores explicabo odio tenetur doloremque!" />
        </HeadlineAboutUs>
      </WrapperAboutUs>
    </Layout>
  )
}
