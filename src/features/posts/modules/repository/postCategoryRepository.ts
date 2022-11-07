import { blogApi } from "@common/api/blogAPI";

const postCategoryRepository = {
  getPostCategoryList: async () => {
    return blogApi.get(`/api/post-categories`);
  },
};

export default postCategoryRepository;
