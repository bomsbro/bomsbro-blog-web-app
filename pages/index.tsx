import React, { useEffect } from "react";
import { useRouter } from "next/router";
import type { NextPage } from "next";

const BomsbroBlog: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/blog/home");
  }, [router]);
  return <div>this is bomsbro&apos;s blog</div>;
};

export default BomsbroBlog;
