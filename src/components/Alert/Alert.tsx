import { HTMLAttributes, forwardRef, useState } from "react";
import CloseButton from "../CloseButton/CloseButton";
import AlertHeading from "../AlertHeading/AlertHeading";
import "./Alert.css";
import { Variant } from "../../type";
import classNames from "classnames";
import AlertLink from "../AlertLink/AlertLink";

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  dismissible?: boolean;
  show?: boolean;
  onClose?: () => void;
  variant?: Variant;
}

const AlertImpl = forwardRef<HTMLDivElement, AlertProps>(
  (allProps: AlertProps, ref) => {
    const {
      dismissible,
      onClose,
      show: controlledShow,
      variant = "primary",
      children,
      className,
      ...props
    } = allProps;

    const isControlled = controlledShow !== undefined;
    const [show, setShow] = useState<boolean>(true);

    const handleClose = () => {
      if (!isControlled) {
        setShow(false);
        return;
      }
      onClose?.();
    };

    const alert = (
      <div
        role="alert"
        {...props}
        ref={ref}
        className={classNames(className, "alert", variant && variant)}
      >
        {dismissible ? <CloseButton onClick={handleClose} /> : null}
        {children}
      </div>
    );

    if (isControlled) {
      return controlledShow ? alert : null;
    }

    return show ? alert : null;
  }
);

const Alert = Object.assign(AlertImpl, {
  Heading: AlertHeading,
  Link: AlertLink,
});

export default Alert;
