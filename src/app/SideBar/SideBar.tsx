"use client";
import { ColumnIcon, RectangleIcon } from "@/icons";
import IconButton from "@/common/IconButton/IconButton";
import NavContainer from "../NavContainer/NavContainer";
import { sideBarNavItemsTypes } from "@/types/sideBarNavItemsTypes";

import {
  helpCenterAndProfileContainerClass,
  helpCenterContainerClass,
  helpCenterLinkClass,
  helpCenterTitleClass,
  profileContainerClass,
  profileEmailClass,
  profileNameClass,
  sideBarContainerClass,
  sideBarHeaderContainerClass,
  sideBarHeaderInnerContainerClass,
  sideBarHeaderTitleClass,
} from "./styles";

interface Props {
  activeNavItem: sideBarNavItemsTypes;
  setActiveNavItem: (activeNavItem: sideBarNavItemsTypes) => void;
}
const SideBar = (props: Props): React.ReactElement => {
  const { activeNavItem, setActiveNavItem } = props;

  const renderHelpCenterAndProfile = (): React.ReactElement => {
    return (
      <div className={helpCenterAndProfileContainerClass}>
        <div className={profileContainerClass}>
          <p>image</p>
          <div className="flex flex-col">
            <p className={profileNameClass} title={"Admin name"}>
              Admin name
            </p>
            <p className={profileEmailClass}>adminname@mail.com</p>
          </div>
          <p>icon</p>
        </div>
        <div className={helpCenterContainerClass}>
          <p>icon</p>
          <div className="flex flex-col">
            <p className={helpCenterTitleClass}>Help center</p>
            <p className={helpCenterLinkClass}>@2024 Omnify.Inc. </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={sideBarContainerClass}>
      <div className={sideBarHeaderContainerClass}>
        <div className={sideBarHeaderInnerContainerClass}>
          <div className="flex items-center gap-[8px]">
            <RectangleIcon />
            <h1 className={sideBarHeaderTitleClass}>Front·Desk</h1>
          </div>
          <IconButton
            icon={
              <div className="relative">
                <ColumnIcon />
                <div className="h-[12px] w-[6px] absolute top-[2px] right-[2px] bg-[#64748B]"></div>
              </div>
            }
            onClick={() => console.log("clicked")}
          />
        </div>
      </div>
      <NavContainer
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
      />
      {renderHelpCenterAndProfile()}
    </div>
  );
};
export default SideBar;
