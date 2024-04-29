import {
  ElementType,
  ReactElement,
  forwardRef,
  useCallback,
  useEffect,
} from "react";
import { createPortal } from "react-dom";
import ModalDialog from "../ModalDialog/ModalDialog";
import ModalContext from "../ModalContext/ModalContext";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalTitle from "../ModalTitle/ModalTitle";
import "./Modal.css";
import classNames from "classnames";

export interface ModalProps {
  show?: boolean;
  backdrop?: boolean;
  onHide?: () => void;
  onShow?: () => void;
  keyboard?: boolean;
  container?: Element | DocumentFragment;
  dialogAs?: ElementType;
  backdropClassname?: string;
  dialogClassname?: string;
  centered?: boolean;
  animation?: boolean;
  fullscreen?: true | "md-down" | "lg-down" | "xl-down";
  size?: "sm" | "lg" | "xl";
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  "aria-label"?: string;
  children?: ReactElement;
  [other: string]: unknown;
}

const ModalImpl = forwardRef<HTMLDivElement, ModalProps>(
  (allProps: ModalProps, ref) => {
    const {
      container = document.body,
      show = false,
      onHide,
      keyboard = true,
      dialogAs: Dialog = ModalDialog,
      backdrop = true,
      backdropClassname = "",
      dialogClassname = "",
      centered = false,
      animation = true,
      fullscreen,
      size,
      "aria-labelledby": ariaLabelledby,
      "aria-describedby": ariaDescribedby,
      "aria-label": ariaLabel,
      children,
    } = allProps;

    const handleHide = useCallback(() => {
      onHide?.();
    }, [onHide]);

    const handleEscapeKeyDown = useCallback(
      (event: KeyboardEvent) => {
        if (keyboard && event.key === "Escape") {
          handleHide();
        }
      },
      [keyboard, handleHide]
    );

    const handleBackdropClick = () => {
      onHide?.();
    };

    useEffect(() => {
      if (show) {
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscapeKeyDown);
      }

      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEscapeKeyDown);
      };
    }, [show, handleEscapeKeyDown]);

    const dialog = (
      <Dialog
        centered={centered}
        animation={animation}
        fullscreen={fullscreen}
        size={size}
        ref={ref}
        className={classNames(dialogClassname)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledby}
        aria-describedby={ariaDescribedby}
      >
        {children}
      </Dialog>
    );

    const backdropImpl = backdrop ? (
      <div
        onClick={handleBackdropClick}
        className={classNames("backdrop", backdropClassname)}
      ></div>
    ) : null;

    return (
      <ModalContext.Provider
        value={{
          onHide: handleHide,
        }}
      >
        {show
          ? createPortal(
              <div className={"modalRoot"}>
                {dialog}
                {backdropImpl}
              </div>,
              container
            )
          : null}
      </ModalContext.Provider>
    );
  }
);

const Modal = Object.assign(ModalImpl, {
  Body: ModalBody,
  Dialog: ModalDialog,
  Footer: ModalFooter,
  Header: ModalHeader,
  Title: ModalTitle,
});

export default Modal;
