import Link from 'next/link'
import { DisplayButton } from './styles'

interface PropButton {
  href: string
  button: string
}

export function Button(props: PropButton) {
  return (
    <Link href={props.href} passHref>
      <DisplayButton {...props}>{props.button}</DisplayButton>
    </Link>
  )
}
