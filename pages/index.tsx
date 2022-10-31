import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogHomeView from "src/apps/home/views/BlogHomeView";
import { NextPage } from "next";
import React from "react";

const BlogHomePage: NextPage = () => {
  return (
    <BlogPagesLayout headerTitle="Home" mainTitle="Bomsbro" subTitle="FE Developer">
      <BlogHomeView />
    </BlogPagesLayout>
  );
};

export default BlogHomePage;
