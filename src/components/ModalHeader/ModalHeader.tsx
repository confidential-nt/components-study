import classNames from "classnames";
import { HTMLAttributes, forwardRef, useContext } from "react";
import CloseButton from "../CloseButton/CloseButton";
import ModalContext from "../ModalContext/ModalContext";

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {
  closeButton?: boolean;
}

const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  (allProps: ModalHeaderProps, ref) => {
    const { className, closeButton = false, children, ...props } = allProps;
    const { onHide } = useContext(ModalContext);
    return (
      <header ref={ref} className={classNames(className)} {...props}>
        {closeButton ? <CloseButton onClick={onHide} /> : null}
        {children}
      </header>
    );
  }
);

export default ModalHeader;
