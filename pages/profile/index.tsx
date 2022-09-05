import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogProfileView from "src/apps/profile/views/BlogProfileView";
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
