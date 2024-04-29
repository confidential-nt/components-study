import classNames from "classnames";
import { HTMLAttributes, forwardRef } from "react";

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {}

const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  (allProps: ModalFooterProps, ref) => {
    const { className, children, ...props } = allProps;
    return (
      <footer ref={ref} className={classNames(className)} {...props}>
        {children}
      </footer>
    );
  }
);

export default ModalFooter;
