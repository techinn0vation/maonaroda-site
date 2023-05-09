import { DisplayTitle } from './styles'

interface PropTitle {
  title: string;
}

export function Title(props: PropTitle) {
  return <DisplayTitle>{props.title}</DisplayTitle>
}
