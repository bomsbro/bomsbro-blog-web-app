import React from "react";
import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogPostView from "src/apps/posts/views/BlogPostView";

const PostDetailPage = () => {
  return (
    <BlogPagesLayout>
      <BlogPostView />
    </BlogPagesLayout>
  );
};

export default PostDetailPage;
