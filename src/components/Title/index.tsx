import { DisplayTitle } from './styles'

interface PropTitle {
  title: string
}

export default function Title(props: PropTitle) {
  return <DisplayTitle>{props.title}</DisplayTitle>
}
