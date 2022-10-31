import postRepository from "@posts/modules/repository/postRepository";
import Link from "next/link";
import React, { ReactNode, useCallback, useEffect } from "react";
import { useQuery } from "react-query";
import getTimeDiffString from "src/common/utils/blogUtils";

interface BlogPostListViewProps {
  postCategoryId: number;
}

const BlogPostListView: React.FC<BlogPostListViewProps> = ({ postCategoryId }) => {
  const { data: postList, error: postListError } = useQuery<any, any, any>(
    ["post-list", postCategoryId],
    async () => {
      let res;
      if (postCategoryId || postCategoryId === 0)
        res = await postRepository.getPostList(postCategoryId);
      else res = await postRepository.getAllPostList();

      return res;
    },
  );

  return (
    <div>
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
    </div>
  );
};

export default BlogPostListView;
