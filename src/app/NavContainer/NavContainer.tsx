import React, { useState } from "react";
import cn from "classnames";
import TextField from "@/common/TextField/TextField";
import { ArrowLeftRight } from "@/icons/ArrowLeftRight/ArrowLeftRight";
import { sideBarNavItemsTypes } from "@/types/sideBarNavItemsTypes";

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
}

//FIXME: Update icons
const NavContainer = (props: Props): React.ReactElement => {
  const { activeNavItem, setActiveNavItem } = props;

  const [locationName, setLocationName] = useState<string>("");

  const renderLocationAndTimeDate = (): React.ReactElement => (
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
            <p>icon</p>
            <p className={utcTextColor}>UTC: +5 hours</p>
          </div>
          <p>icon</p>
        </div>
      </div>
    </div>
  );

  const renderNavItemsContainer = (): React.ReactElement => {
    return (
      <div className={navItemsContainerClass}>
        <div
          className={cn(
            navItemClass,
            activeNavItem === sideBarNavItemsTypes.ORDERS && activeNavItemClass
          )}
          onClick={() => setActiveNavItem(sideBarNavItemsTypes.ORDERS)}
        >
          <p>icon</p>
          <p className={navItemTextClass}>Orders</p>
        </div>
        <div
          className={cn(
            navItemClass,
            activeNavItem === sideBarNavItemsTypes.SUBSCRIPTIONS &&
              activeNavItemClass
          )}
          onClick={() => setActiveNavItem(sideBarNavItemsTypes.SUBSCRIPTIONS)}
        >
          <p>icon</p>
          <p className={navItemTextClass}>Subscriptions</p>
        </div>
        <div
          className={cn(
            navItemClass,
            activeNavItem === sideBarNavItemsTypes.CALENDAR &&
              activeNavItemClass
          )}
          onClick={() => setActiveNavItem(sideBarNavItemsTypes.CALENDAR)}
        >
          <p>icon</p>
          <p className={navItemTextClass}>Calendar</p>
        </div>
        <div
          className={cn(
            navItemClass,
            activeNavItem === sideBarNavItemsTypes.WAITLIST &&
              activeNavItemClass
          )}
          onClick={() => setActiveNavItem(sideBarNavItemsTypes.WAITLIST)}
        >
          <p>icon</p>
          <p className={navItemTextClass}>Waitlist</p>
        </div>
      </div>
    );
  };

  const renderDashboardNavItem = (): React.ReactElement => {
    return (
      <div className={dashboardNavItemContainerClass}>
        <div className="flex items-center gap-[8px]">
          <p>icon</p>
          <p className={dashboardNavItemTextClass}>Dashboard</p>
        </div>
        <p>icon</p>
      </div>
    );
  };

  return (
    <div className={navContainerClass}>
      {renderLocationAndTimeDate()}
      {renderNavItemsContainer()}
      {renderDashboardNavItem()}
    </div>
  );
};

export default NavContainer;
