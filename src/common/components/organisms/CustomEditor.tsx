import React from "react";

import { Editor } from "@tinymce/tinymce-react";

interface CustomEditorProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onInit: (event: any, editor: any) => void;
  initialValue?: string;
}

const CustomEditor: React.FC<CustomEditorProps> = ({ onInit, initialValue = "" }) => {
  return (
    <>
      {/* TinyMce Editor */}
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
        onInit={onInit}
        initialValue={initialValue}
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
    </>
  );
};

export default CustomEditor;
