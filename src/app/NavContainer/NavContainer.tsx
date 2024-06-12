import cn from "classnames";
import React, { useState } from "react";

import Link from "next/link";
import TextField from "@/common/TextField/TextField";
import { sideBarNavItemsTypes } from "@/types/sideBarNavItemsTypes";
import {
  ArrowLeftRight,
  CalenderDaysIcon,
  ChevronDown,
  GlobeIcon,
  HourGlassIcon,
  InboxIcon,
  LayoutDashboard,
  SecondaryIcon,
  SubscriptionIcon,
} from "@/icons";

import {
  activeNavItemClass,
  dashboardNavItemContainerClass,
  dashboardNavItemTextClass,
  dateTextClass,
  dateTimeContainerClass,
  locationNameContainerClass,
  locationNameInputClass,
  navContainerClass,
  navItemClass,
  navItemTextClass,
  navItemsContainerClass,
  timeTextClass,
  utcTextColor,
} from "./styles";

interface Props {
  activeNavItem: sideBarNavItemsTypes;
  setActiveNavItem: (activeNavItem: sideBarNavItemsTypes) => void;
  isOpenSidePane: boolean;
}

const NavContainer = (props: Props): React.ReactElement => {
  const { isOpenSidePane, activeNavItem, setActiveNavItem } = props;
  const [locationName, setLocationName] = useState<string>("");

  const renderLocationAndTimeDate = (): React.ReactElement =>
    isOpenSidePane ? (
      <div className="flex flex-col items-center">
        <div className={locationNameContainerClass}>
          <TextField
            value={locationName}
            onChange={setLocationName}
            inputFieldClass={locationNameInputClass}
            placeholder="Location Name"
          />
          <div className="mr-[8px]">
            <ArrowLeftRight />
          </div>
        </div>
        <div className={dateTimeContainerClass}>
          <div className="flex items-center gap-[8px]">
            <p className={timeTextClass}>08:30 AM</p>
            <p className={dateTextClass}>Tue 20 Jan</p>
          </div>
          <div className="flex items-center justify-between gap-[8px]">
            <div className="flex items-center gap-[4px]">
              <GlobeIcon height={13} width={13} fill="#64748B" />
              <p className={utcTextColor}>UTC: +5 hours</p>
            </div>
            <ChevronDown height={16} width={16} fill="#334155" />
          </div>
        </div>
      </div>
    ) : (
      <div className="flex flex-col items-center">
        <div className="w-[48px] h-[56px] z-10 flex flex-row items-center justify-center rounded-[6px] border-b border-solid border-[#E2E8F0] bg-[#FFF] shadow-custom focus-within:ring-2 focus-within:ring-blue-100">
          <ArrowLeftRight />
        </div>
        <div className="flex items-center justify-center w-[29px] h-[30px] relative top-[-3px] rounded-[4px] bg-[#F1F5F9] border border-solid border-[#E2E8F0]">
          <GlobeIcon height={13} width={13} fill="#64748B" />
        </div>
      </div>
    );

  const renderNavItemsContainer = (): React.ReactElement => {
    return (
      <div
        className={cn(navItemsContainerClass, { "w-[48px]": !isOpenSidePane })}
      >
        <div
          className={cn(
            navItemClass,
            activeNavItem === sideBarNavItemsTypes.ORDERS && activeNavItemClass,
            { "flex items-center justify-center": !isOpenSidePane }
          )}
          onClick={() => setActiveNavItem(sideBarNavItemsTypes.ORDERS)}
        >
          <InboxIcon />
          {isOpenSidePane && <p className={navItemTextClass}>Orders</p>}
        </div>
        <div
          className={cn(
            navItemClass,
            activeNavItem === sideBarNavItemsTypes.SUBSCRIPTIONS &&
              activeNavItemClass,
            { "flex items-center justify-center": !isOpenSidePane }
          )}
          onClick={() => setActiveNavItem(sideBarNavItemsTypes.SUBSCRIPTIONS)}
        >
          <SubscriptionIcon />
          {isOpenSidePane && <p className={navItemTextClass}>Subscriptions</p>}
        </div>
        <div
          className={cn(
            navItemClass,
            activeNavItem === sideBarNavItemsTypes.CALENDAR &&
              activeNavItemClass,
            { "flex items-center justify-center": !isOpenSidePane }
          )}
          onClick={() => setActiveNavItem(sideBarNavItemsTypes.CALENDAR)}
        >
          <CalenderDaysIcon />
          {isOpenSidePane && <p className={navItemTextClass}>Calendar</p>}
        </div>
        <div
          className={cn(
            navItemClass,
            activeNavItem === sideBarNavItemsTypes.WAITLIST &&
              activeNavItemClass,
            { "flex items-center justify-center": !isOpenSidePane }
          )}
          onClick={() => setActiveNavItem(sideBarNavItemsTypes.WAITLIST)}
        >
          <HourGlassIcon />
          {isOpenSidePane && <p className={navItemTextClass}>Waitlist</p>}
        </div>
      </div>
    );
  };

  const renderDashboardNavItem = (): React.ReactElement => {
    return (
      <Link href={"/dashboard"}>
        <div
          className={cn(dashboardNavItemContainerClass, {
            "w-[48px] !justify-center": !isOpenSidePane,
          })}
        >
          {isOpenSidePane && (
            <div className="flex items-center gap-[8px]">
              <LayoutDashboard />
              <p className={dashboardNavItemTextClass}>Dashboard</p>
            </div>
          )}
          <SecondaryIcon />
        </div>
      </Link>
    );
  };

  return (
    <div className={cn(navContainerClass, { "!w-[54px]": !isOpenSidePane })}>
      {renderLocationAndTimeDate()}
      {renderNavItemsContainer()}
      {renderDashboardNavItem()}
    </div>
  );
};

export default NavContainer;
