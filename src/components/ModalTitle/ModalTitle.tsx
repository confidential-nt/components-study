import classNames from "classnames";
import { HTMLAttributes, forwardRef } from "react";

export interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  (allProps: ModalTitleProps, ref) => {
    const { className, children, ...props } = allProps;
    return (
      <h4 ref={ref} className={classNames(className)} {...props}>
        {children}
      </h4>
    );
  }
);

export default ModalTitle;
