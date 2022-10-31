import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogProjectsView from "src/apps/project/views/BlogProjectsView";
import type { NextPage } from "next";
import React from "react";
import NormalContentsLayout from "@src/common/templates/NormalContentsLayout";

const ProejctPage: NextPage = () => {
  return (
    <BlogPagesLayout headerTitle="Projects">
      <NormalContentsLayout>
        <BlogProjectsView />
      </NormalContentsLayout>
    </BlogPagesLayout>
  );
};

export default ProejctPage;
