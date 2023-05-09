import Navigation from '@/components/Navigation'
import { WrapperLayout } from './styles'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <WrapperLayout>
      <Navigation />
      {children}
    </WrapperLayout>
  )
}
