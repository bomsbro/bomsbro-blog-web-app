import BlogPagesLayout from "@bomsbro-blog-core/templates/BlogPagesLayout";
import BlogProjectView from "@bomsbro-blog-project/views/BlogProjectView";
import type { NextPage } from "next";
import React from "react";

const ProejctPage: NextPage = () => {
  return (
    <BlogPagesLayout>
      <BlogProjectView />
    </BlogPagesLayout>
  );
};

export default ProejctPage;
