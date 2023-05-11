import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HomePage = () => {
  const router = useRouter()

  useEffect(() => {
    void router.push('/home')
  }, [router])

  return null
}

export default HomePage
