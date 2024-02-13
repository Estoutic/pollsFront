import { HTMLAttributes } from "react";

export interface IBaseComponentProps extends HTMLAttributes<HTMLElement> {
  ref?: any;
}
