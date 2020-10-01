import React from 'react';
import { IPost } from '~/types';
import { Body, Container, Title } from './styles';

interface Props {
  post: IPost;
  onClick: (post: IPost, event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export default function Post({ post, onClick }: Props) {
  return (
    <Container onClick={(event) => onClick(post, event)}>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
    </Container>
  );
}
