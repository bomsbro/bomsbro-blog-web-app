import { MenuAlt2Icon } from "@heroicons/react/outline";
import postCategoryRepository from "@posts/modules/repository/postCategoryRepository";
import postRepository from "@posts/modules/repository/postRepository";
import SubAppBar from "@src/common/components/organisms/SubAppBar";
import SubNavBottomDrawer from "@src/common/components/outfits/SubNavBottomDrawer";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import getTimeDiffString from "src/common/utils/blogUtils";

interface BlogPostListViewProps {
  currentCategory: any;
  categoryList: any;
}

const BlogPostListView: React.FC<BlogPostListViewProps> = ({ currentCategory, categoryList }) => {
  const [subNavOpen, setSubNavOpen] = useState<boolean>(false);
  const { data: postList, error: postListError } = useQuery<any, any, any>(
    ["post-list", currentCategory],
    async () => {
      let res;
      if (currentCategory?.id || currentCategory?.id === 0)
        res = await postRepository.getPostList(currentCategory?.id);
      else res = await postRepository.getAllPostList(); // 현재 카테고리가 없으면 전체게시판
      return res;
    },
  );

  return (
    <>
      <SubAppBar
        mobile={
          <div className="flex items-center">
            <MenuAlt2Icon
              className="w-7 h-7 ml-1 mr-4"
              onClick={() => {
                setSubNavOpen(true);
                // window.scrollBy({ top: 200, behavior: "smooth" });
              }}
            />
            <p>{currentCategory?.name || "전체 게시글"}</p>
          </div>
        }
      />
      {/* Content Area */}
      <div className="flex flex-wrap py-6">
        {/* Sidebar Section */}
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          {/* Web Menu SideBar */}
          <div className="hidden md:flex w-full bg-white shadow flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">카테고리</p>
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
          </div>
        </aside>
        {/* Posts Section */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {/* Post Item */}
          {postList?.map((item: any) => {
            return (
              <Link key={item.id} href={`/posts/${item.id}`}>
                <article className="w-full flex flex-col shadow my-4">
                  {/* Article Image */}

                  <img
                    width={1000}
                    height={500}
                    src="https://source.unsplash.com/random/1000x500?sig=1"
                    alt=""
                  />

                  <div className="bg-white flex flex-col justify-start p-6">
                    <p className="text-blue-700 text-sm font-bold uppercase pb-4">
                      {item.postCategoryName}
                    </p>
                    <p className="text-3xl font-bold hover:text-gray-700 pb-4">{item.title}</p>
                    <p className="pb-6">{item.previewText}</p>
                    <p className="text-sm pb-3">
                      By{" "}
                      <a href="#" className="font-semibold hover:text-gray-800">
                        {item.writerName}
                      </a>
                      , {getTimeDiffString(item.modifiedDate)}
                    </p>
                    <div className="flex">
                      <div>viewCount: {item.viewCount}</div>
                      <div>replyCount: {item.replyCount}</div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}

          {/* Pagination */}
          <div className="flex items-center py-8">
            <a
              href="#"
              className="h-10 w-10 bg-blue-800 hover:bg-blue-600 font-semibold text-white text-sm flex items-center justify-center"
            >
              1
            </a>
            <a
              href="#"
              className="h-10 w-10 font-semibold text-gray-800 hover:bg-blue-600 hover:text-white text-sm flex items-center justify-center"
            >
              2
            </a>
            <a
              href="#"
              className="h-10 w-10 font-semibold text-gray-800 hover:text-gray-900 text-sm flex items-center justify-center ml-3"
            >
              Next <i className="fas fa-arrow-right ml-2" />
            </a>
          </div>
        </section>
      </div>
      {subNavOpen && (
        <SubNavBottomDrawer
          onClose={async () => {
            setSubNavOpen(false);
          }}
        >
          <p className="text-xl font-semibold pb-5">카테고리</p>
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
        </SubNavBottomDrawer>
      )}
    </>
  );
};

export default BlogPostListView;
