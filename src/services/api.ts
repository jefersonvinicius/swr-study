import axios from 'axios';

function createAPI(baseURL: string) {
  const api = axios.create({ baseURL });

  return {
    fetchPosts: async () => {
      const { data } = await api.get('/posts');
      return data;
    },
  };
}

const api = createAPI('https://jsonplaceholder.typicode.com/');

export default api;
