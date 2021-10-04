import React from "react";

import { ButtonBack3, ButtonFront3 } from "./index";

const Button = (props) => (
  <ButtonBack3 alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront3
      alt={props.alt}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonFront3>
  </ButtonBack3>
);

export default Button;
