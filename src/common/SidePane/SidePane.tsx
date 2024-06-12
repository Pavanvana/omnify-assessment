import { ReactNode } from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";

import { sidePaneCloseButtonClass } from "./styles";
import "./styles.css";

interface ReactBaseModalProps {
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: (val: boolean) => void;
}

const SidePane: React.FC<ReactBaseModalProps> = ({
  children,
  isOpen,
  onOpenChange,
}): React.ReactElement => {
  return (
    <DialogTrigger>
      <Modal className="my-modal" isOpen={isOpen} onOpenChange={onOpenChange}>
        <Dialog className="h-full w-[230px]">
          <div className="flex flex-col h-full w-[230px]">{children}</div>
        </Dialog>
      </Modal>
    </DialogTrigger>
  );
};

export default SidePane;
