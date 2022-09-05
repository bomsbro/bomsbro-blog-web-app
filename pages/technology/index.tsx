import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogHomeView from "src/apps/home/views/BlogHomeView";
import { NextPage } from "next";
import React from "react";

const index: NextPage = () => {
  return (
    <BlogPagesLayout>
      <BlogHomeView />
    </BlogPagesLayout>
  );
};

export default index;
