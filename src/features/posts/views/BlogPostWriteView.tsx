import { MenuAlt2Icon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { ReactNode, useRef, useState } from "react";

import SubAppBar from "@src/common/components/organisms/SubAppBar";
import { useForm } from "react-hook-form";
import CustomEditor from "@src/common/components/organisms/CustomEditor";

const BlogPostWriteView: React.FC = () => {
  const [postWriteData, setPostWriteData] = useState({
    title: "",
    content: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const editorRef = useRef<unknown>(null);

  const handleClickTempSaveButton = handleSubmit(async (data: any) => {
    setPostWriteData(data);
  });

  const handleClickSaveButton = handleSubmit(async (data: any) => {
    setPostWriteData(data);
  });

  return (
    <>
      <SubAppBar />
      {/* Content Area */}
      <div className="flex flex-wrap py-6">
        {/* Write Post Section */}

        <section className="w-full md:w-4/5 flex flex-col items-center px-3">
          <form>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="email">
                Title
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  {...register("title", { required: true })}
                />
              </label>
              {errors.email && <span className="text-xs text-red-500">This field is required</span>}
            </div>
            <CustomEditor
              onInit={(event, editor) => {
                editorRef.current = editor;
                return editorRef;
              }}
              {...register("email", { required: true })}
            />
          </form>
        </section>

        {/* Sidebar Section */}
        <aside className="w-full md:w-1/5 flex flex-col items-center px-3">
          {/* Web Menu SideBar */}
          <div className="hidden md:flex w-full bg-white shadow flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              Profile
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Settings
            </li>
            <li className="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">
              Messages
            </li>
          </div>
          <Link href="/posts/write">
            <button
              onClick={handleClickTempSaveButton}
              type="button"
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
            >
              임시 저장
            </button>
          </Link>
          <Link href="/posts/write">
            <button
              onClick={handleClickSaveButton}
              type="button"
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
            >
              글쓰기
            </button>
          </Link>
        </aside>
      </div>
    </>
  );
};

export default BlogPostWriteView;
