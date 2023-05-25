import { WrapperLayout } from './styles'
import ScrollProgress from '@/components/ScrollProgress'
import Navigation from '@/components/Navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <WrapperLayout>
      <ScrollProgress />
      <Navigation />
      {children}
    </WrapperLayout>
  )
}
