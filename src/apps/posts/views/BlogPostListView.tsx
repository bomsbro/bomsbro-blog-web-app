import { MenuAlt2Icon } from "@heroicons/react/outline";
import axios from "axios";
import Link from "next/link";
import React, { useEffect } from "react";
import { useQuery } from "react-query";

interface BlogPostListViewProps {
  postCategory: number;
}

const BlogPostListView: React.FC<BlogPostListViewProps> = ({
  postCategory,
}) => {
  const fetchPostCategoryList = async () => {
    return axios.get(`https://bomsbro.com/api/post-categories/`);
  };

  const fetchPostList = async () => {
    return axios.get(
      `https://bomsbro.com/api/post-categories/${postCategory}/posts`
    );
  };

  const { data: postList, error: postListError } = useQuery(
    ["post-list", postCategory],
    fetchPostList,
    {
      onSuccess: async (res) => {
        // 성공시 호출
        console.log(res);
      },
    }
  );

  const { data: categoryList, error: categoryListError } = useQuery(
    "post-categories",
    fetchPostCategoryList,
    {
      onSuccess: async (res) => {
        // 성공시 호출
        console.log(res);
      },
    }
  );

  return (
    <>
      {/* Content Area */}
      <div className="flex flex-wrap py-6">
        {/* Sidebar Section */}
        <aside className="w-full md:w-1/3 flex flex-col items-center px-3">
          {/* Mobile MenuBar */}
          <div className="w-full md:hidden pt-1 pb-2 container mx-auto flex flex-wrap items-center justify-between">
            <div className="flex items-center">
              <MenuAlt2Icon
                className="w-7 h-7 ml-1 mr-4"
                onClick={() => console.log("하이")}
              />
              <p>Post Categories</p>
            </div>
          </div>
          {/* Web Menu SideBar */}
          <div className="hidden md:flex w-full bg-white shadow flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">카테고리</p>
            {categoryList?.data.data.map((item: any) => {
              return (
                <Link key={item.id} href={`/posts?postCategory=${item.id}`}>
                  <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    {item.name}
                  </li>
                </Link>
              );
            })}
          </div>
          <Link href="/posts/write">
            <button
              type="button"
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
            >
              글쓰기
            </button>
          </Link>
        </aside>
        {/* Posts Section */}
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {/* Post Item */}
          {postList?.data.data.map((item: any) => {
            return (
              <article
                key={item.id}
                className="w-full flex flex-col shadow my-4"
              >
                {/* Article Image */}
                <a href="#" className="hover:opacity-75">
                  <img
                    src="https://source.unsplash.com/random/1000x500?sig=1"
                    alt=""
                  />
                </a>
                <div className="bg-white flex flex-col justify-start p-6">
                  <a
                    href="#"
                    className="text-blue-700 text-sm font-bold uppercase pb-4"
                  >
                    {item.categoryName}
                  </a>
                  <a
                    href="#"
                    className="text-3xl font-bold hover:text-gray-700 pb-4"
                  >
                    {item.title}
                  </a>

                  <a href="#" className="pb-6">
                    {item.previewText}
                  </a>
                  <p className="text-sm pb-3">
                    By{" "}
                    <a href="#" className="font-semibold hover:text-gray-800">
                      David Grzyb
                    </a>
                    , Published on {item.modifiedDate}
                  </p>
                  <div className="flex">
                    <div>viewCount: {item.viewCount}</div>
                    <div>replyCount: {item.replyCount}</div>
                  </div>
                </div>
              </article>
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
      ;
    </>
  );
};

export default BlogPostListView;
