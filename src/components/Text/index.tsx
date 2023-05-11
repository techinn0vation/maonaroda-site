import { DisplayText } from './styles'

interface PropText {
  message: string
}

export default function Text(props: PropText) {
  return <DisplayText>{props.message}</DisplayText>
}
