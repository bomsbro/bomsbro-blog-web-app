import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
