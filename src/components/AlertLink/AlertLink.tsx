import { AnchorHTMLAttributes, forwardRef } from "react";
import "./AlertLink.css";
import classNames from "classnames";

export interface AlertLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const AlertLink = forwardRef<HTMLAnchorElement, AlertLinkProps>(
  ({ href, children, ...props }: AlertLinkProps, ref) => {
    return (
      <a href={href} ref={ref} {...props} className={classNames("alertLink")}>
        {children}
      </a>
    );
  }
);

export default AlertLink;
