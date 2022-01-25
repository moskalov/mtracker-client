import styled from "styled-components";
import React from "react";

type ColumnProps = {}

const Column: React.FC<ColumnProps> = (props) => {

    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default Column;

const Container = styled.div <{ backgroundColor?: string }>`
  background-color: ${props => props.backgroundColor || "rgba(236,236,236,0)"};
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
`;
