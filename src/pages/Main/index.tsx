import React from 'react';
import useSWR from 'swr';
import { Container, PostsContainer } from './styles';
import axios from 'axios';
import { IPost } from '~/types';
import Post from '~/components/Post';
import { useHistory } from 'react-router-dom';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Main() {
  const history = useHistory();

  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  function handlePostClick(post: IPost) {
    history.push('/post/' + post.id);
  }

  return (
    <Container>
      {!data && !error ? (
        <span>Loading...</span>
      ) : (
        <PostsContainer>
          {data.map((post: IPost) => {
            return <Post key={post.id} post={post} onClick={handlePostClick} />;
          })}
        </PostsContainer>
      )}
    </Container>
  );
}
