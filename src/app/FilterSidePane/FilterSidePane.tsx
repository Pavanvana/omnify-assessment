"use client";

import cn from "classnames";
import { useState } from "react";
import { CalenderIcon, LayoutDashboard, UsersIcon } from "@/icons";
import { FilterTabsEnum } from "@/types/filterTypes";

import {
  sidePaneActiveItemClass,
  sidePaneClass,
  sidePaneItemClass,
  sidePaneItemTextClass,
} from "./styles";

interface Props {
  filterActiveTab: FilterTabsEnum;
  setFilterActiveTab: (value: FilterTabsEnum) => void;
}

const FilterSidePane = (props: Props): React.ReactElement => {
  const { filterActiveTab, setFilterActiveTab } = props;

  return (
    <div className={sidePaneClass}>
      <div
        className={cn(
          sidePaneItemClass,
          filterActiveTab === FilterTabsEnum.SCHEDULED_DATE &&
            sidePaneActiveItemClass
        )}
        onClick={() => setFilterActiveTab(FilterTabsEnum.SCHEDULED_DATE)}
      >
        <div className="flex items-center gap-[8px]">
          <CalenderIcon height={16} width={16} />
          <p className={sidePaneItemTextClass}>Scheduled Date</p>
        </div>
      </div>
      <div
        className={cn(
          sidePaneItemClass,
          filterActiveTab === FilterTabsEnum.PEOPLE && sidePaneActiveItemClass
        )}
        onClick={() => setFilterActiveTab(FilterTabsEnum.PEOPLE)}
      >
        <div className="flex items-center  gap-[8px]">
          <UsersIcon height={16} width={16} />
          <p className={sidePaneItemTextClass}>People</p>
        </div>
      </div>
      <div
        className={cn(
          sidePaneItemClass,
          filterActiveTab === FilterTabsEnum.SERVICES_PRODUCTS &&
            sidePaneActiveItemClass
        )}
        onClick={() => setFilterActiveTab(FilterTabsEnum.SERVICES_PRODUCTS)}
      >
        <div className="flex items-center  gap-[8px]">
          <LayoutDashboard height={16} width={16} />
          <p className={sidePaneItemTextClass}>Services / Products</p>
        </div>
      </div>
    </div>
  );
};

export default FilterSidePane;
