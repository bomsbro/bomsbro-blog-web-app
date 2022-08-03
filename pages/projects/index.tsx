import BlogPagesLayout from "@bomsbro-blog-core/templates/BlogPagesLayout";
import BlogProjectsView from "@bomsbro-blog-project/views/BlogProjectsView";
import type { NextPage } from "next";
import React from "react";

const ProejctPage: NextPage = () => {
  return (
    <BlogPagesLayout>
      <BlogProjectsView />
    </BlogPagesLayout>
  );
};

export default ProejctPage;
