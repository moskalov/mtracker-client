import styled from "styled-components";
import React from "react";

type ColumnContainerProps = {
    backgroundImg?: string,
    style?: any
}

const ColumnContainer: React.FC<ColumnContainerProps> = (props) => {
    return (
        <Container style={props.style} backgroundImg={props.backgroundImg}>
            {props.children}
        </Container>
    )
}

export default ColumnContainer;

const Container = styled.div <{ backgroundImg?: string }>`
  background-image: ${props => props.backgroundImg || "rgba(236,236,236,0)"};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: color-burn;
  background-color: rgba(255, 255, 255, 0.86);
  display: flex;
  margin: 0 30px;
  min-height: 600px;
  max-width: 900px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px,
  rgba(0, 0, 0, 0.22) 0 10px 10px;;
  border-radius: 25px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
  }
`