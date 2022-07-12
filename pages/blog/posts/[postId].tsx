import BlogPagesLayout from "@bomsbro-blog-core/templates/BlogPagesLayout";
import BlogPostView from "@bomsbro-blog-posts/views/BlogPostView";
import React from "react";

const PostDetailPage = () => {
  return (
    <BlogPagesLayout>
      <BlogPostView />
    </BlogPagesLayout>
  );
};

export default PostDetailPage;
