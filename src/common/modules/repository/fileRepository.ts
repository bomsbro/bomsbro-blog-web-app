import { blogApi } from "@common/api/blogAPI";

interface File {
  fileId: number;
  postId: number;
  fileName: string;
  fileOrgName: string;
  fileExtention: string;
  fileSize: number;
  fileUrl: string;
  createdDate: null;
  modifiedDate: null;
}

const fileRepository = {
  getUploadUrl: async (fileName: string) => {
    const res = await blogApi.get(`/api/files/upload-url?fileName=${fileName}`);
    return res;
  },

  getFileList: async (postCategoryId: number) => {
    const res = await blogApi.get(`/api/files?page=1&size=5`);
    return res;
  },

  patchFileList: async (postCategoryId: number, fileList: File[]) => {
    const res = await blogApi.put(`/api/files`, fileList);
    return res;
  },

  postFile: async (postCategoryId: number, file: File) => {
    const res = await blogApi.post(`/api/files`, file);
    return res;
  },
  getFile: async (postCategoryId: number, fileId: number) => {
    const res = await blogApi.get(`/api/files/${fileId}`);
    return res;
  },

  putFile: async (postCategoryId: number, fileId: number, file: File) => {
    const res = await blogApi.put(`/api/${fileId}`, file);
    return res;
  },

  deleteFile: async (postCategoryId: number, fileId: number) => {
    const res = await blogApi.delete(`/api/files/${fileId}`);
    return res;
  },
};

export default fileRepository;
