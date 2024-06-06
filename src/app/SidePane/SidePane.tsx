"use client";

import { useState } from "react";
import cn from "classnames";

import { sidePaneTypes } from "@/types/sidePaneTypes";

import {
  sidePaneActiveItemClass,
  sidePaneClass,
  sidePaneItemClass,
  sidePaneItemIconClass,
} from "./styles";

const SidePane = (): React.ReactElement => {
  const [sidePaneActiveItem, setSidePaneActiveItem] = useState(
    sidePaneTypes.SCHEDULED_DATE
  );

  return (
    <div className={sidePaneClass}>
      <div
        className={cn(
          sidePaneItemClass,
          sidePaneActiveItem === sidePaneTypes.SCHEDULED_DATE &&
            sidePaneActiveItemClass
        )}
        onClick={() => setSidePaneActiveItem(sidePaneTypes.SCHEDULED_DATE)}
      >
        <div className="flex items-center">
          <p className={sidePaneItemIconClass}>icon</p>
          <p>Scheduled Date</p>
        </div>
      </div>
      <div
        className={cn(
          sidePaneItemClass,
          sidePaneActiveItem === sidePaneTypes.PEOPLE && sidePaneActiveItemClass
        )}
        onClick={() => setSidePaneActiveItem(sidePaneTypes.PEOPLE)}
      >
        <div className="flex items-center">
          <p className={sidePaneItemIconClass}>icon</p>
          <p>People</p>
        </div>
      </div>
      <div
        className={cn(
          sidePaneItemClass,
          sidePaneActiveItem === sidePaneTypes.SERVICES_PRODUCTS &&
            sidePaneActiveItemClass
        )}
        onClick={() => setSidePaneActiveItem(sidePaneTypes.SERVICES_PRODUCTS)}
      >
        <div className="flex items-center">
          <p className={sidePaneItemIconClass}>icon</p>
          <p>Services / Products</p>
        </div>
      </div>
    </div>
  );
};

export default SidePane;
