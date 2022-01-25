import React from "react";
import styled from "styled-components";

type TextButtonProps = {}

const TextButton: React.FC<TextButtonProps> = (props) => {

    return (
        <TextButton {...props}>
            {props.children}
        </TextButton>
    )
}

export default TextButton;

const Button = styled.button`
  border: none;
  background-color: inherit;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  color: #1f7c98;
  font-weight: bold;
`
