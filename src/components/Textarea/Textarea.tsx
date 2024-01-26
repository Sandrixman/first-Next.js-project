import React from "react";
import { TextareaProps } from "./Textarea.props";
import style from "./Textarea.module.css";
import cn from "classnames";

export const Textarea = ({ className, ...props }: TextareaProps): JSX.Element => {
    return <textarea className={cn(className, style.textarea)} {...props} />;
};
