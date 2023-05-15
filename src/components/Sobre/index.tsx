import Text from '../Text'
import Title from '../Title'
import { ButtonAboutUs, HeadlineAboutUs, WrapperAboutUs } from './styles'

export default function AboutUs() {
  return (
    <WrapperAboutUs>
      <HeadlineAboutUs>
        <Title title="quem somos" />
        <Text message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi accusantium quasi exercitationem reprehenderit sint id provident voluptas ab dolore ipsam nesciunt eos voluptatum, labore quod asperiores explicabo odio tenetur doloremque!" />
        <ButtonAboutUs href="#">
          <Text message="saber mais" />
        </ButtonAboutUs>
      </HeadlineAboutUs>
    </WrapperAboutUs>
  )
}
