import BlogPagesLayout from "@bomsbro-blog-core/templates/BlogPagesLayout";
import { NextPage } from "next";
import React from "react";
import BlogPostView from "src/subapps/bomsbro-blog-posts/views/BlogPostView";

const BlogBoardPage: NextPage = () => {
  return (
    <BlogPagesLayout>
      <BlogPostView />
    </BlogPagesLayout>
  );
};

export default BlogBoardPage;
