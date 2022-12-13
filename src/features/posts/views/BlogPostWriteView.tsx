import Link from "next/link";
import React, { useRef, useState } from "react";
import SubAppBar from "@src/common/components/organisms/SubAppBar";
import { useForm } from "react-hook-form";
import CustomEditor from "@src/common/components/organisms/CustomEditor";

interface BlogPostWriteViewProps {
  categoryList: any;
}

const BlogPostWriteView: React.FC<BlogPostWriteViewProps> = ({ categoryList }) => {
  const [postWriteData, setPostWriteData] = useState({
    title: "",
    content: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const editorRef = useRef<any>(null);

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
          <form className="w-full">
            <div className="mb-4">
              <select
                id="category"
                placeholder="Category"
                className="shadow border rounded w-full py-2 px-3 text-grey-darker"
                defaultValue=""
                {...register("category", { required: true })}
              >
                <option value="">Category</option>
                {categoryList?.map((item: any) => {
                  if (item.id === 0) return null; // 미분류 게시판은 순서가 맨 밑에 있어야 함
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="email"
                placeholder="Title"
                {...register("title", { required: true })}
              />
              {errors.email && <span className="text-xs text-red-500">This field is required</span>}
            </div>
            <CustomEditor
              onInit={(event, editor) => {
                editorRef.current = editor;
              }}
              placeholder="Content"
              {...register("content", { required: true })}
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
