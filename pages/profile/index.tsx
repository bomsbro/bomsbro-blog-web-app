import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogProfileView from "src/apps/profile/views/BlogProfileView";
import { NextPage } from "next";
import React from "react";
import NormalContentsLayout from "@src/common/templates/NormalContentsLayout";

const index: NextPage = () => {
  return (
    <BlogPagesLayout headerTitle="Profile">
      <NormalContentsLayout>
        <BlogProfileView />
      </NormalContentsLayout>
    </BlogPagesLayout>
  );
};

export default index;
