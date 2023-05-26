import { ButtonLink } from './styles'

interface PropButton {
  DisplayButton: string;
  href: string;
  icon: React.ReactNode;
}

export default function DisplayButton({
  DisplayButton,
  href,
  icon
}: PropButton) {
  return (
    <ButtonLink href={href}>
      {icon}
      {DisplayButton}
    </ButtonLink>
  )
}
