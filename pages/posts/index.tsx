import BlogPagesLayout from "@bomsbro-blog-core/templates/BlogPagesLayout";
import { NextPage } from "next";
import React from "react";
import BlogPostListView from "src/subapps/bomsbro-blog-posts/views/BlogPostListView";

const BlogBoardPage: NextPage = () => {
  return (
    <BlogPagesLayout>
      <BlogPostListView />
    </BlogPagesLayout>
  );
};

export default BlogBoardPage;
