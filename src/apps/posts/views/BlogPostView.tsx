import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

interface BlogPostViewProps {
  postId: number;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ postId }) => {
  const fetchPost = async () => {
    return axios.get(`https://bomsbro.com/api/posts/${postId}`);
  };

  const { data: post, error: postError } = useQuery(
    ["post", postId],
    fetchPost,
    {
      onSuccess: async (res) => {
        // 성공시 호출
        console.log(res);
      },
    }
  );
  return (
    <div className="w-full flex flex-wrap py-6">
      {/* Post Section */}

      <article className="w-full flex flex-col shadow my-4">
        {/* Article Image */}
        <a href="#" className="hover:opacity-75">
          <img
            width={1280}
            height={500}
            loading="lazy"
            src="https://source.unsplash.com/collection/1346951/1280x500?sig=1"
            alt="로딩중"
          />
        </a>
        <div className="bg-white flex flex-col justify-start p-6">
          {/* Post Category */}
          <a
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            Technology
          </a>
          {/* Post Title */}
          <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            {post?.data.data.title}
          </a>
          {/* Writer */}
          <p className="text-sm pb-8">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-800">
              David Grzyb
            </a>
            , Published on April 25th, 2020
          </p>
          {/* Contents */}
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: post?.data.data.content,
            }}
          />
        </div>
      </article>

      <div className="w-full flex pt-6">
        <a
          href="#"
          className="w-1/2 bg-white shadow hover:shadow-md text-left p-6"
        >
          <p className="text-lg text-blue-800 font-bold flex items-center">
            <i className="fas fa-arrow-left pr-1" /> Previous
          </p>
          <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        </a>
        <a
          href="#"
          className="w-1/2 bg-white shadow hover:shadow-md text-right p-6"
        >
          <p className="text-lg text-blue-800 font-bold flex items-center justify-end">
            Next <i className="fas fa-arrow-right pl-1" />
          </p>
          <p className="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
        </a>
      </div>

      <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
        <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
          <img
            width={150}
            height={150}
            src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
            className="rounded-full shadow h-32 w-32"
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center md:justify-start">
          <p className="font-semibold text-2xl">David</p>
          <p className="pt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vel neque non libero suscipit suscipit eu eu urna.
          </p>
          <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
            <a className="" href="#">
              <i className="fab fa-facebook" />
            </a>
            <a className="pl-4" href="#">
              <i className="fab fa-instagram" />
            </a>
            <a className="pl-4" href="#">
              <i className="fab fa-twitter" />
            </a>
            <a className="pl-4" href="#">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostView;
