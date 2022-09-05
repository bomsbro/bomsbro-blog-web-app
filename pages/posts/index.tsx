import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import { NextPage } from "next";
import React from "react";
import BlogPostListView from "src/apps/posts/views/BlogPostListView";

const BlogBoardPage: NextPage = () => {
  return (
    <BlogPagesLayout>
      <BlogPostListView />
    </BlogPagesLayout>
  );
};

export default BlogBoardPage;
