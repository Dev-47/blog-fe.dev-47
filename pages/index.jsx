
import { client } from '../lib/services/client'

export default function Home({data}) {
  cons
  return (
    <>
      <main className="">Please show!</main>
    </>
  );
}

export function getSeverSideprops(){
  const res = client.get("/api/v1/posts")

  return {
    props: {
data: res
    }
  }
}