import React from "react";
import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogPostView from "src/apps/posts/components/BlogPostView";
import { useRouter } from "next/router";

const PostDetailPage = () => {
  const router = useRouter();
  return (
    <BlogPagesLayout>
      <BlogPostView postId={parseInt(router.query.postId as string, 10)} />
    </BlogPagesLayout>
  );
};

export default PostDetailPage;
