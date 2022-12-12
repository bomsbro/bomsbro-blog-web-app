import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface CustomEditorProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onInit: (event: any, editor: any) => void;
  placeholder?: string;
  initialValue?: string;
  value?: string;
}

const CustomEditor: React.FC<CustomEditorProps> = ({
  onInit,
  placeholder,
  initialValue = "",
  value,
}) => {
  return (
    <>
      {/* TinyMce Editor */}
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
        onInit={onInit}
        initialValue={initialValue}
        value={value}
        init={{
          width: "100%",
          min_height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            `autoresize`,
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          images_upload_url: "https://storage.bomsbro.com",
          placeholder,
        }}
      />
    </>
  );
};

export default CustomEditor;
