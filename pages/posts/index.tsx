import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import { NextPage } from "next";
import React from "react";
import BlogPostListView from "src/apps/posts/views/BlogPostListView";
import { useRouter } from "next/router";

const BlogBoardPage: NextPage = () => {
  const router = useRouter();

  return (
    <BlogPagesLayout>
      <BlogPostListView
        postCategory={parseInt(router.query.postCategory as string, 10)}
      />
    </BlogPagesLayout>
  );
};

export default BlogBoardPage;
