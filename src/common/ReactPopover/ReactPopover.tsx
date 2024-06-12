import { observer } from "mobx-react-lite";
import React, { ReactElement, ReactNode, useEffect, useRef } from "react";
import { Dialog, Popover, PopoverProps } from "react-aria-components";

interface ReactPopoverProps extends Omit<PopoverProps, "children"> {
  children: ReactNode;
  popOverClass: string;
  onChangePopover?: (val: boolean) => void;
}

const ReactPopover: React.FC<ReactPopoverProps> = ({
  children,
  popOverClass,
}): ReactElement => {
  return (
    <Popover offset={20}>
      <Dialog className={popOverClass}>{children}</Dialog>
    </Popover>
  );
};
export default observer(ReactPopover);
