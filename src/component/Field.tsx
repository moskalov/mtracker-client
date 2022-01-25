import React, {ComponentProps} from "react";
import styled from "styled-components";

type FieldProps = ComponentProps<typeof Input>['type'];

const Field: React.FC<FieldProps> = (props) => {

    return (
        <div>
            <label htmlFor={props.name}>
                <b>{props.label}</b>
            </label>
            <Input{...props}/>
        </div>
    )
}

export default Field;

const Input = styled("input")`
  width: 100%;
  padding: 14px 20px;
  margin: 8px 0 12px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 10px;
`