import { createContext } from "react";

interface ModalContextType {
  onHide: () => void;
}

const ModalContext = createContext<ModalContextType>({
  onHide() {},
});

export default ModalContext;
