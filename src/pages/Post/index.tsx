import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { Container, PostBody, PostContent, PostTitle } from './styles';
import axios from 'axios';
import { IComment, IPost } from '~/types';
import Comment from './Comment';

interface RouterParams {
  id?: string;
}

const postFetcher = (url: string): Promise<IPost> => axios.get(url).then((response) => response.data);
const commentsFetcher = (url: string): Promise<IComment[]> => axios.get(url).then((response) => response.data);

export default function Post() {
  const { id } = useParams<RouterParams>();
  const { data: post, error: postError } = useSWR(`https://jsonplaceholder.typicode.com/posts/${id}`, postFetcher);
  const { data: comments, error: commentsError } = useSWR(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    commentsFetcher
  );

  return (
    <Container>
      {!post && !postError ? (
        <p>Loading...</p>
      ) : (
        <PostContent>
          <PostTitle>{post?.title}</PostTitle>
          <PostBody>{post?.body}</PostBody>
        </PostContent>
      )}
      <p>{comments?.length} comentários</p>
      {comments?.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </Container>
  );
}
