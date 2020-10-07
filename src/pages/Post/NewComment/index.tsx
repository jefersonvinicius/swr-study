import React, { FormEvent, useRef } from 'react';
import { IComment } from '~/types';
import { Container, Form, ContentField, EmailField, Title } from './styles';

interface Props {
  onCommented: (comment: IComment) => void;
}

export default function NewComment({ onCommented }: Props) {
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputContentRef = useRef<HTMLTextAreaElement>(null);

  function handleCommentSubmit(event: FormEvent) {
    event.preventDefault();
    const comment: IComment = {
      email: inputEmailRef.current?.value || '',
      body: inputContentRef.current?.value || '',
    };
    onCommented(comment);
  }

  return (
    <Container>
      <Form onSubmit={handleCommentSubmit}>
        <Title>Fazer novo comentário:</Title>
        <EmailField ref={inputEmailRef} placeholder="Email" />
        <ContentField ref={inputContentRef} placeholder="Comentário" />
      </Form>
    </Container>
  );
}
