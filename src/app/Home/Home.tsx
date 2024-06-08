"use client";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import { sideBarNavItemsTypes } from "@/types/sideBarNavItemsTypes";
import WaitList from "../WaitList/WaitList";
import Orders from "../Orders/Orders";
import Calender from "../Calender/Calender";
import Subscriptions from "../Subscriptions/Subscriptions";

const Home = (): React.ReactElement => {
  const [activeNavItem, setActiveNavItem] = useState(
    sideBarNavItemsTypes.WAITLIST
  );

  const renderBody = (): React.ReactElement => {
    switch (activeNavItem) {
      case sideBarNavItemsTypes.ORDERS:
        return <Orders />;
      case sideBarNavItemsTypes.CALENDAR:
        return <Calender />;
      case sideBarNavItemsTypes.SUBSCRIPTIONS:
        return <Subscriptions />;
      case sideBarNavItemsTypes.WAITLIST:
        return <WaitList />;
    }
  };

  return (
    <div className="flex bg-[#F8FAFC] w-full">
      <SideBar
        activeNavItem={activeNavItem}
        setActiveNavItem={setActiveNavItem}
      />
      <div className="w-full h-full p-[10px]">{renderBody()}</div>
    </div>
  );
};
export default Home;
