import React from "react";
import BlogPagesLayout from "@bomsbro-blog-core/templates/BlogPagesLayout";
import BlogPostView from "@bomsbro-blog-posts/views/BlogPostView";

const PostDetailPage = () => {
  return (
    <BlogPagesLayout>
      <BlogPostView />
    </BlogPagesLayout>
  );
};

export default PostDetailPage;
