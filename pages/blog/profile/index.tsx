import BlogPagesLayout from "@bomsbro-blog-core/templates/BlogPagesLayout";
import BlogProfileView from "@bomsbro-blog-profile/views/BlogProfileView";
import { NextPage } from "next";
import React from "react";

const index: NextPage = () => {
  return (
    <BlogPagesLayout>
      <BlogProfileView />
    </BlogPagesLayout>
  );
};

export default index;
