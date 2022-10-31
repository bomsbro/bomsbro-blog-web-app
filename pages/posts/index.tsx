import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import { NextPage } from "next";
import React from "react";
import BlogPostListView from "src/apps/posts/components/BlogPostListView";
import { useRouter } from "next/router";

const BlogBoardPage: NextPage = () => {
  const router = useRouter();
  const { postCategoryId } = router.query;

  return (
    <BlogPagesLayout headerTitle="Posts">
      <BlogPostListView postCategoryId={parseInt(postCategoryId as string, 10)} />
    </BlogPagesLayout>
  );
};

export default BlogBoardPage;
