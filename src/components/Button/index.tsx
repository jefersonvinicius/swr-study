import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { Container } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
}

const Button: FunctionComponent<Props> = (props: Props) => {
  return <Container style={{ backgroundColor: props.color }}>{props.children}</Container>;
};

export default Button;
