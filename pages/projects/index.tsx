import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogProjectsView from "@src/features/project/views/BlogProjectsView";
import type { NextPage } from "next";
import React from "react";

const ProejctPage: NextPage = () => {
  return (
    <BlogPagesLayout headerTitle="Projects">
      <BlogProjectsView />
    </BlogPagesLayout>
  );
};

export default ProejctPage;
