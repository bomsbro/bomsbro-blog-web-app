import React from "react";
import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogPostView from "src/apps/posts/components/BlogPostView";
import { useRouter } from "next/router";
import NormalContentsLayout from "@src/common/templates/NormalContentsLayout";

const PostDetailPage = () => {
  const router = useRouter();
  return (
    <BlogPagesLayout>
      <NormalContentsLayout>
        <BlogPostView postId={parseInt(router.query.postId as string, 10)} />
      </NormalContentsLayout>
    </BlogPagesLayout>
  );
};

export default PostDetailPage;
