import React from 'react';
import { Container, Author, Content } from './styles';
import { IComment } from '~/types';

interface Props {
  comment: IComment;
}

export default function Comment({ comment }: Props) {
  return (
    <Container>
      <Author>
        <strong>Por: </strong>
        {comment.email}
      </Author>
      <Content>{comment.body}</Content>
    </Container>
  );
}
