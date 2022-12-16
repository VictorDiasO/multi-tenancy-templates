import { useRouter } from 'next/router'

export default function Tenant() {
  const router = useRouter()
  const { tenant } = router.query

  return <p>Tenant: {tenant}</p>
}