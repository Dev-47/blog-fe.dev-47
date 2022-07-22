import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { client } from "../lib/services/client";

export default function Home({ data = [] }) {
  console.log(data);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);

  return (
    <>
      <main className="p-5 lg:px-10">
        <div className="flex items-center justify-between mb-5">
          <Link href="/">
            <a className="block text-xl font-semibold underline lg:text-3xl">
              Dev 47 blog
            </a>
          </Link>
          <Link href="/register">
            <a className="px-5 py-2 text-xs text-white bg-blue-400 rounded-md">
              Login/Register
            </a>
          </Link>
        </div>

        <div className="space-y-5">
          {data.map((post) => {
            return (
              <Link href={`/post/${post.slug}`} key={post._id}>
                <a className="block w-full max-w-full">
                  <div className="p-3 bg-white rounded-md drop-shadow-md">
                    <h2 className="mb-3 text-lg font-medium">{post.title}</h2>
                    <p className="text-sm">{post.body}</p>
                    <span className="flex items-center justify-start gap-4 mt-2 font-medium">
                      <p className="text-xs">Author: {post.author.username}</p>
                      {loaded && (
                        <p className="text-xs">
                          {new Date(post.createdAt).toLocaleString()}
                        </p>
                      )}
                    </span>
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
  const res = await client("/api/v1/posts");
  const data = res.data;

  // Pass data to the page via props
  return { props: { data } };
}
