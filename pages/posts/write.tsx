import React from "react";
import BlogPagesLayout from "@common/templates/BlogPagesLayout";
import BlogPostWriteView from "@src/features/posts/views/BlogPostWriteView";
import postCategoryRepository from "@src/features/posts/modules/repository/postCategoryRepository";
import { useQuery } from "react-query";

const PostDetailPage = () => {
  const { data: categoryList, error: categoryListError } = useQuery<any, any, any>(
    "post-categories",
    async () => {
      const res = await postCategoryRepository.getPostCategoryList();
      return res;
    },
  );
  return (
    <BlogPagesLayout headerTitle="Posts" mainTitle="Write">
      <BlogPostWriteView categoryList={categoryList} />
    </BlogPagesLayout>
  );
};

export default PostDetailPage;
