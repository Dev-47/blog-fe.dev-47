import React, { useEffect, useState } from "react";
import Link from "next/link";
import { client } from "../../lib/services/client";

const Post = ({ post }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [loaded]);
  return (
    <div className="p-5 lg:px-10">
      <Link href="/">
        <a className="block mb-5 text-xl font-semibold underline lg:text-3xl">
          Dev 47 blog
        </a>
      </Link>
      {post && (
        <div className="bg-white">
          <h2 className="mb-1 text-lg font-medium">{post.title}</h2>
          <span className="flex items-center justify-start gap-4 font-medium">
            <p className="text-xs">Author: {post.author.username}</p>
            {loaded && (
              <p className="text-xs">
                {new Date(post.createdAt).toLocaleString()}
              </p>
            )}
          </span>
          <p className="mt-5 text-sm">{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const res = await client("/api/v1/posts");
  const data = res.data;

  const paths = data.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await client(`/api/v1/posts/${params.slug}`);
  const data = res.data;

  return {
    props: {
      post: data,
    },
  };
};
