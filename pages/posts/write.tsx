import React from "react";
import BlogPagesLayout from "@common/templates/BlogPagesLayout";
import BlogPostWriteView from "@posts/components/BlogPostWriteView";
import SubMenuContentsLayout from "@src/common/templates/SubMenuContentsLayout";
import Link from "next/link";

const PostDetailPage = () => {
  return (
    <BlogPagesLayout headerTitle="Posts" mainTitle="Write">
      <SubMenuContentsLayout
        subMenuTitle="Tools"
        SubMenu={
          <>
            {/* Web Menu SideBar */}
            <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              Profile
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Settings
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Messages
            </li>

            <Link href="/posts/write">
              <button
                type="button"
                className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
              >
                임시 저장
              </button>
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
      >
        <BlogPostWriteView />
      </SubMenuContentsLayout>
    </BlogPagesLayout>
  );
};

export default PostDetailPage;
