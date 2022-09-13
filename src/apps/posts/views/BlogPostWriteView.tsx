import { MenuAlt2Icon } from "@heroicons/react/outline";
import Link from "next/link";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

const BlogPostWriteView: React.FC = () => {
  const editorRef = useRef<any>(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      {/* Content Area */}
      <div className="flex flex-wrap py-6">
        {/* Posts Section */}
        <section className="w-full md:w-4/5 flex flex-col items-center px-3">
          {/* TinyMce Editor */}
          <Editor
            onInit={(evt, editor) => {
              editorRef.current = editor;
              return editorRef;
            }}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              width: "100%",
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
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
        </aside>
      </div>
    </>
  );
};

export default BlogPostWriteView;
