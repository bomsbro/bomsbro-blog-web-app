import { blogApi } from "@common/api/blogAPI";

interface Post {
  id: number;
  name: string;
  order: number;
  createdDate: null;
  modifiedDate: null;
}

const postRepository = {
  getAllPostList: async () => {
    const res = await blogApi.get(`/api/posts?page=1&size=5`);
    return res;
  },
  getPostList: async (postCategoryId: number) => {
    const res = await blogApi.get(`/api/post-categories/${postCategoryId}/posts?page=1&size=5`);
    return res;
  },
};

export default postRepository;
