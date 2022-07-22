import Head from "next/head";
import Link from "next/link";
import { client } from "../lib/services/client";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Head></Head>
      <main className="p-5 lg:px-10">
        <h1 className="mb-5 text-xl font-semibold lg:text-3xl">Dev 47 blog</h1>
        <div className="space-y-5">
          {data.map((post) => {
            return (
              <Link href={`/${post.slug}`} passHref key={post._id}>
                <a className="block w-full max-w-full">
                  <div className="p-3 bg-white rounded-md drop-shadow-md">
                    <h2 className="mb-3 text-lg font-medium">{post.title}</h2>
                    <p className="text-sm">{post.body}</p>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  //const res = await fetch("http://localhost:8000/api/v1/posts");
  const res = await client("/api/v1/posts");
  const data = res;

  // Pass data to the page via props
  return { props: { data } };
}
