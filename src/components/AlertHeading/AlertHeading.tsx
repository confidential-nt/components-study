import { HTMLAttributes, forwardRef } from "react";
import "./AlertHeading.css";
import classNames from "classnames";

interface AlertHeadingProps extends HTMLAttributes<HTMLDivElement> {}

const AlertHeading = forwardRef<HTMLDivElement, AlertHeadingProps>(
  ({ children, className, ...props }: AlertHeadingProps, ref) => {
    return (
      <div
        ref={ref}
        role="heading"
        {...props}
        className={classNames(className, "alertHeading")}
      >
        {children}
      </div>
    );
  }
);

export default AlertHeading;
