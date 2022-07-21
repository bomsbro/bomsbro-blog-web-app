import { useRouter } from "next/router";
import React, { useEffect } from "react";

const BlogPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/blog/home");
  }, [router]);
  return <div>this is bomsbro&apos;s blog</div>;
};

export default BlogPage;
