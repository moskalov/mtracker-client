import styled from "styled-components";
import React from "react";


interface HeaderLabelProps {
    center?: boolean
}

const HeaderLabel: React.FC<HeaderLabelProps> = (props) => {

    return (
        <Container center={props.center}>
            <h1 style={{fontSize: 32}}>
                {props.children}
            </h1>
        </Container>
    )
}

export default HeaderLabel

const Container = styled.div<{ center?: boolean }>`
  text-align: ${p => p.center ? 'center' : 'left'};
  color: #17b8b7;
  width: 100%;
  padding-bottom: 20px;
`