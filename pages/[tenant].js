import { useRouter } from 'next/router'

export default function Tenant(props) {
  const { tenant, subdomain } = props;

  const router = useRouter()
  // const { tenant } = router.query
  console.log('Multi-tenant: ', tenant, ' || ', subdomain);

  return <p>Tenant: {tenant}</p>
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const { host } = req.headers;
  const subdomain = host.split('.')[0];
  const tenant = subdomain === 'a' ? 'tenantA' : 'tenantB';

  console.log('Multi-tenant: ', tenant, ' || ', subdomain);

  return {
    props: {
      tenant,
      subdomain
    },
  };
}