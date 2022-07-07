import BlogPagesLayout from "@bomsbro-blog-core/templates/BlogPagesLayout";
import BlogProjectView from "@bomsbro-blog-project/views/BlogProjectView";
import { NextPage } from "next";
import React from "react";

const index: NextPage = () => {
  return (
    <BlogPagesLayout>
      <BlogProjectView />
    </BlogPagesLayout>
  );
};

export default index;
