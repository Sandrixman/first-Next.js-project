import React from "react";
import { InputProps } from "./Input.props";
import style from "./Input.module.css";
import cn from "classnames";

export const Input = ({ className, ...props }: InputProps): JSX.Element => {
    return <input className={cn(className, style.input)} {...props} />;
};
