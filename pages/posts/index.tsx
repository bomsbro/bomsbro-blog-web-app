import BlogPagesLayout from "src/common/templates/BlogPagesLayout";
import { NextPage } from "next";
import React, { useEffect, useMemo } from "react";
import BlogPostListView from "src/apps/posts/components/BlogPostListView";
import { useRouter } from "next/router";
import SubMenuContentsLayout from "@src/common/templates/SubMenuContentsLayout";
import Link from "next/link";
import postCategoryRepository from "@src/apps/posts/modules/repository/postCategoryRepository";
import { useQuery } from "react-query";

const BlogBoardPage: NextPage = () => {
  const router = useRouter();
  const { postCategoryId } = router.query;

  /* TODO: getInitial Props로 바꿔야함 */
  const { data: categoryList, error: categoryListError } = useQuery<any, any, any>(
    "post-categories",
    async () => {
      const res = await postCategoryRepository.getPostCategoryList();
      return res;
    },
  );

  const currentCategory = useMemo(() => {
    const filteredCategory = categoryList?.filter((item: any) => {
      return item.id === parseInt(postCategoryId as string, 10);
    })[0];
    return filteredCategory;
  }, [postCategoryId, categoryList]);

  return (
    <BlogPagesLayout headerTitle="Posts">
      <SubMenuContentsLayout
        subMenuTitle="카테고리"
        SubMenu={
          <>
            <Link href="/posts">
              <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                전체 게시글
              </li>
            </Link>
            {categoryList?.map((item: any) => {
              if (item.id === 0) return null; // 미분류 게시판은 순서가 맨 밑에 있어야 함
              return (
                <Link key={item.id} href={`/posts?postCategoryId=${item.id}`}>
                  <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    {item.name}
                  </li>
                </Link>
              );
            })}
            <Link href={`/posts?postCategoryId=${0}`}>
              <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                미분류
              </li>
            </Link>
            <Link href="/posts/write">
              <button
                type="button"
                className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
              >
                글쓰기
              </button>
            </Link>
          </>
        }
        rowReverse
      >
        <BlogPostListView postCategoryId={currentCategory?.id} />
      </SubMenuContentsLayout>
    </BlogPagesLayout>
  );
};

export default BlogBoardPage;
