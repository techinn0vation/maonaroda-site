import Head from 'next/head'
import Navigation from '@/components/Navigation'
import { WrapperLayout } from './styles'
import Footer from '../Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <WrapperLayout>
      <Head>
        <title>Mão na Roda</title>
      </Head>
      <Navigation />
      {children}
      <Footer />
    </WrapperLayout>
  )
}
