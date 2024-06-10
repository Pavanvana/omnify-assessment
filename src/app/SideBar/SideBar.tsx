"use client";
import { useState } from "react";
import cn from "classnames";
import Image from "next/image";
import {
  ChevronDown,
  ColumnIcon,
  HelpCircleIcon,
  RectangleIcon,
} from "@/icons";
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
  const [isOpenSidePane, setIsOpenSidePane] = useState(true);

  const renderHelpCenterAndProfile = (): React.ReactElement => {
    return (
      <div
        className={cn(helpCenterAndProfileContainerClass, {
          "!w-[64px]": !isOpenSidePane,
        })}
      >
        <div
          className={cn(profileContainerClass, {
            "!justify-center": !isOpenSidePane,
          })}
        >
          <Image
            src="https://s3-alpha-sig.figma.com/img/50bf/8335/ed36576c36a0ca9f2f12b142cec2231f?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WLJrDcPNwLeXl1fqOW9QH6WBak0JztYdJQoreyNZTv~WNzqoB6NIKmQbmJ549bbX2J3YgQSvbpvUVc26AtIQwAR7gBW-8423vbWmxX27y80kAneVljohzH7Ackx~BpBnYUtBzMrvh9QsKwyZWItZYKbaffFNXWTFteRzD0moBEMxeRq4XL-2SURMTm7n1doYAztaYGwhXRzt4SIQUR4rqd5oCCbY~Vgh4-KPuYZjDlH-WzEbBbj090XD-v6rT-lSAaq7dFzQCuCEj-5JU1N65e2GyuBdIE~c8AjEIuA-v7grY8H4TlJUL8pdL-6LOoGkVup1nddx41OLPaQs0qKEVg"
            alt="profile"
            height={24}
            width={24}
            className="rounded-full"
          />

          {isOpenSidePane && (
            <>
              <div className="flex flex-col">
                <p className={profileNameClass} title={"Admin name"}>
                  Admin name
                </p>
                <p className={profileEmailClass}>adminname@mail.com</p>
              </div>
              <ChevronDown />
            </>
          )}
        </div>
        <div className={helpCenterContainerClass}>
          <HelpCircleIcon />
          {isOpenSidePane && (
            <div className="flex flex-col ml-[8px]">
              <p className={helpCenterTitleClass}>Help center</p>
              <p className={helpCenterLinkClass}>@2024 Omnify.Inc. </p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={isOpenSidePane ? "w-[250px]" : "w-[54px]"}>
      {isOpenSidePane ? (
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
                onClick={() => setIsOpenSidePane(false)}
              />
            </div>
          </div>
          <NavContainer
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            isOpenSidePane={isOpenSidePane}
          />
          {renderHelpCenterAndProfile()}
        </div>
      ) : (
        <div className="w-[54px] flex flex-col h-full">
          <div className="h-[60px] p-[8px] bg-[#F8FAFC] flex items-center justify-center">
            <button onClick={() => setIsOpenSidePane(true)}>
              <RectangleIcon height={22} width={22} />
            </button>
          </div>
          <NavContainer
            activeNavItem={activeNavItem}
            setActiveNavItem={setActiveNavItem}
            isOpenSidePane={isOpenSidePane}
          />
          {renderHelpCenterAndProfile()}
        </div>
      )}
    </div>
  );
};
export default SideBar;
