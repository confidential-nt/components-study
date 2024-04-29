import { HTMLAttributes } from "react";
import "./CloseButton.css";
import classNames from "classnames";

export interface CloseButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export default function CloseButton({
  onClick,
  className,
  ...props
}: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      {...props}
      className={classNames(className, "closeButton")}
    >
      x
    </button>
  );
}
