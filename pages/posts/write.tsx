import React from "react";
import BlogPagesLayout from "@common/templates/BlogPagesLayout";
import BlogPostWriteView from "@src/apps/posts/views/BlogPostWriteView";

const PostDetailPage = () => {
  return (
    <BlogPagesLayout headerTitle="Posts" mainTitle="Write">
      <BlogPostWriteView />
    </BlogPagesLayout>
  );
};

export default PostDetailPage;
