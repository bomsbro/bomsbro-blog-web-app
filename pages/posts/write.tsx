import React from "react";
import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogPostWriteView from "@posts/views/BlogPostWriteView";

const PostDetailPage = () => {
  return (
    <BlogPagesLayout>
      <BlogPostWriteView />
    </BlogPagesLayout>
  );
};

export default PostDetailPage;
