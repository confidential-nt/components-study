import classNames from "classnames";
import { HTMLAttributes, forwardRef } from "react";
import "./ModalDialog.css";

export interface ModalDialogProps extends HTMLAttributes<HTMLDivElement> {
  centered?: boolean;
  animation?: boolean;
  fullscreen?: true | "md-down" | "lg-down" | "xl-down";
  size?: "sm" | "lg" | "xl";
}

const ModalDialog = forwardRef<HTMLDivElement, ModalDialogProps>(
  (allProps: ModalDialogProps, ref) => {
    const {
      centered = false,
      animation = true,
      fullscreen,
      size,
      className,
      children,
      ...props
    } = allProps;
    return (
      <div
        role="dialog"
        ref={ref}
        className={classNames("modalDialog", className, {
          centered,
          animation,
          [`fs-${fullscreen}`]: fullscreen,
          [`${size}`]: size,
        })}
        {...props}
      >
        {children}
      </div>
    );
  }
);

export default ModalDialog;
