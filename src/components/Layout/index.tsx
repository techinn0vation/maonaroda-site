import { WrapperLayout } from './styles'
import Head from 'next/head'
import ScrollProgress from '../ScrollProgress'
import Navigation from '@/components/Navigation'
import Footer from '../Footer'

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
