import { DisplayTitle } from './styles'

interface PropTitle {
  message: string
}

export default function Title(props: PropTitle) {
  return <DisplayTitle>{props.message}</DisplayTitle>
}
