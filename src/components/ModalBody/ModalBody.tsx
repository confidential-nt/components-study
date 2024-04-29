import classNames from "classnames";
import { HTMLAttributes, forwardRef } from "react";

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {}

const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  (allProps: ModalBodyProps, ref) => {
    const { className, children, ...props } = allProps;
    return (
      <div ref={ref} className={classNames(className)} {...props}>
        {children}
      </div>
    );
  }
);

export default ModalBody;
