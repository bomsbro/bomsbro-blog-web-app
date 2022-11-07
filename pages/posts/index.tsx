import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import { NextPage } from "next";
import React, { useCallback, useEffect, useMemo } from "react";
import BlogPostListView from "@src/features/posts/views/BlogPostListView";
import { useRouter } from "next/router";
import postCategoryRepository from "@src/features/posts/modules/repository/postCategoryRepository";
import { useQuery } from "react-query";

const BlogBoardPage: NextPage = () => {
  const router = useRouter();
  const { postCategoryId } = router.query;

  const { data: categoryList, error: categoryListError } = useQuery<any, any, any>(
    "post-categories",
    async () => {
      const res = await postCategoryRepository.getPostCategoryList();
      return res;
    },
  );

  // change to useMemo
  const currentCategory = useMemo(() => {
    const filteredCategory = categoryList?.filter((item: any) => {
      return item.id === parseInt(postCategoryId as string, 10);
    })[0];
    return filteredCategory;
  }, [postCategoryId, categoryList]);

  return (
    <BlogPagesLayout headerTitle="Posts">
      <BlogPostListView currentCategory={currentCategory} categoryList={categoryList} />
    </BlogPagesLayout>
  );
};

export default BlogBoardPage;
