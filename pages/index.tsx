import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import BlogHomeView from "src/apps/home/views/BlogHomeView";
import { NextPage } from "next";
import React from "react";
import SubMenuContentsLayout from "@src/common/templates/SubMenuContentsLayout";
import NormalContentsLayout from "@src/common/templates/NormalContentsLayout";

const BlogHomePage: NextPage = () => {
  return (
    <BlogPagesLayout headerTitle="Home" mainTitle="Bomsbro" subTitle="FE Developer">
      <NormalContentsLayout>
        <BlogHomeView />
      </NormalContentsLayout>
    </BlogPagesLayout>
  );
};

export default BlogHomePage;
