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
      {/* Post Write Section */}
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
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </section>
    </>
  );
};

export default BlogPostWriteView;
