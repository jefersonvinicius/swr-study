import axios from 'axios';
import { IComment } from '~/types';

function createAPI(baseURL: string) {
  const api = axios.create({ baseURL });

  return {
    saveComment: async (comment: IComment, postId: string): Promise<IComment> => {
      const { data } = await api.post(`/posts/${postId}/comments`, {
        ...comment,
        postId,
      });
      return data;
    },
  };
}

const api = createAPI('https://jsonplaceholder.typicode.com/');

export default api;
