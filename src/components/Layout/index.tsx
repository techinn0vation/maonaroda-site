import { ContentLayout, WrapperLayout } from './styles'

import {
  ScrollProgress,
  Navigation,
  Footer
} from '@/components/GeralComponents'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <WrapperLayout>
      <ScrollProgress />
      <Navigation />
      <ContentLayout>{children}</ContentLayout>
      <Footer />
    </WrapperLayout>
  )
}
