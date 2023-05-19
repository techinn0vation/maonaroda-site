import Text from '../Text'
import Title from '../Title'
import { ButtonAboutUs, HeadlineAboutUs, WrapperAboutUs } from './styles'
import { useInView } from 'react-intersection-observer'

export default function SobreNos() {
  const { ref, inView } = useInView()

  return (
    <WrapperAboutUs ref={ref} inView={inView}>
      <HeadlineAboutUs>
        <Title message="quem somos" />
        <Text message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium quasi exercitationem reprehenderit sint id provident voluptas ab dolore ipsam nesciunt eos voluptatum, labore quod asperiores explicabo odio tenetur doloremque!" />
        <ButtonAboutUs href="#">
          <Text message="saber mais" />
        </ButtonAboutUs>
      </HeadlineAboutUs>
    </WrapperAboutUs>
  )
}
