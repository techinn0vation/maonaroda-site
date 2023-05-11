import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HomePage = () => {
  const router = useRouter()

  useEffect(() => {
    const redirect = async () => {
      await router.push('/home')
    }
    void redirect()
  }, [router])

  return null
}

export default HomePage
