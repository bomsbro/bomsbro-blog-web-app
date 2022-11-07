import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogProfileView from "@src/features/profile/views/BlogProfileView";
import { NextPage } from "next";
import React from "react";

const index: NextPage = () => {
  return (
    <BlogPagesLayout headerTitle="Profile">
      <BlogProfileView />
    </BlogPagesLayout>
  );
};

export default index;
