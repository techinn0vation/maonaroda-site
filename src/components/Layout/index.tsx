import { WrapperLayout } from './styles'
import ScrollProgress from '@/components/ScrollProgress'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <WrapperLayout>
      <ScrollProgress />
      <Navigation />
      {children}
      <Footer />
    </WrapperLayout>
  )
}
