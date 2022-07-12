import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const HomePage: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/home");
  }, [router]);

  return (
    <>
      <div>야</div>
      <div>호</div>
    </>
  );
};

export default HomePage;
