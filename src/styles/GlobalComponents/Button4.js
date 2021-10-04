import React from "react";

import { ButtonBack4, ButtonFront4 } from "./index";

const Button = (props) => (
  <ButtonBack4 alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront4
      alt={props.alt}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonFront4>
  </ButtonBack4>
);

export default Button;
