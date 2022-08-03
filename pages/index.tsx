import BlogPagesLayout from "@bomsbro-blog-core/templates/BlogPagesLayout";
import BlogHomeView from "@bomsbro-blog-home/views/BlogHomeView";
import { NextPage } from "next";
import React from "react";

const BlogHomePage: NextPage = () => {
  return (
    <BlogPagesLayout>
      <BlogHomeView />
    </BlogPagesLayout>
  );
};

export default BlogHomePage;
