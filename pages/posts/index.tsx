import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import { NextPage } from "next";
import React from "react";
import BlogPostListView from "src/apps/posts/views/BlogPostListView";
import { useRouter } from "next/router";

const BlogBoardPage: NextPage = () => {
  const router = useRouter();
  console.log(router.query.postCategory);
  return (
    <BlogPagesLayout>
      <BlogPostListView postCategory={router.query.postCategory} />
    </BlogPagesLayout>
  );
};

export default BlogBoardPage;
