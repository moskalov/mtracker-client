import styled from "styled-components";


const StyledButton = styled("button") <{ color?: string }>`
  background-color: ${props => props.color || "#15b7b6"};
  color: white;
  padding: 12px 18px;
  margin: 18px 0;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  width: 100%;
`

export default StyledButton;