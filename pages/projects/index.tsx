import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogProjectsView from "src/apps/project/views/BlogProjectsView";
import type { NextPage } from "next";
import React from "react";

const ProejctPage: NextPage = () => {
  return (
    <BlogPagesLayout headerTitle="Projects" mainTitle="Portfolio">
      <BlogProjectsView />
    </BlogPagesLayout>
  );
};

export default ProejctPage;
