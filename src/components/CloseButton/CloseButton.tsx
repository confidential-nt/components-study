import { HTMLAttributes } from "react";
import styles from "./CloseButton.module.css";
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
      className={classNames(className, styles.closeButton)}
    >
      x
    </button>
  );
}
