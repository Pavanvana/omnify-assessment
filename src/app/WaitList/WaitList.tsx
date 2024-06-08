import React, { useState } from "react";

import SearchField from "@/common/SearchField/SearchField";
import WaitListTable from "../WaitListTable/WaitListTable";

import {
  filterContainerClass,
  filterTextClass,
  paginationNumberButtonClass,
  paginationNumberClass,
  previousAndNextButtonClass,
  searchInputContainerClass,
  searchInputFieldClass,
  tableContainerClass,
  tableFooterContainer,
  waitListContainerClass,
  waitListCountClass,
  waitListCountContainer,
  waitListCountTextClass,
  waitListHeaderClass,
  waitListHeaderTitleClass,
} from "./styles";

const WaitList = (): React.ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("");

  const renderWaitListFilterSection = (): React.ReactElement => (
    <div className="flex flex-col gap-[16px] p-[12px_16px_12px_16px]">
      <div className="flex justify-between gap-[15px] mr-[50px]">
        <div className={waitListCountContainer}>
          <p className={waitListCountTextClass}>
            All Waitlists <span className={waitListCountClass}>100</span>
          </p>
        </div>
        <div className={waitListCountContainer}>
          <p className={waitListCountTextClass}>
            Newly Added <span className={waitListCountClass}>50</span>
          </p>
        </div>
        <div className={waitListCountContainer}>
          <p className={waitListCountTextClass}>
            Leads <span className={waitListCountClass}>100</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className={filterContainerClass}>
            <p>icon</p>
            <p className={filterTextClass}>Add Filter</p>
          </div>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className={searchInputContainerClass}>
            <p>icon</p>
            <SearchField
              value={searchValue}
              onChange={setSearchValue}
              inputFieldClass={searchInputFieldClass}
              placeholder="Search client"
              className="w-full"
            />
          </div>
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </div>
      </div>
    </div>
  );

  const renderTable = (): React.ReactElement => (
    <div className="flex flex-col h-full">
      <div className={tableContainerClass}>
        <WaitListTable />
      </div>
      <div className={tableFooterContainer}>
        <div className="flex items-center gap-[2px]">
          <p className="text-[14px] font-normal text-[#64748B]">Displaying</p>
          <div className="flex items-center gap-[6px] p-[4px_12px_4px_12px] rounded-[6px]">
            <p className="text-[#334155] text-[14px] font-medium font-sans">
              15
            </p>
            <p>icon</p>
          </div>
          <p className="text-[14px] font-medium font-sans text-[#64748B]">
            out of <span className="text-[#18181B]">104</span>
          </p>
        </div>
        <div className="flex items-center mr-[75px]">
          <div className={previousAndNextButtonClass}>
            <p>icon</p>
            <p>Previous</p>
          </div>
          <div className={paginationNumberButtonClass}>
            <p className={paginationNumberClass}>1</p>
          </div>
          <div className={paginationNumberButtonClass}>
            <p className={paginationNumberClass}>2</p>
          </div>
          <div className={paginationNumberButtonClass}>
            <p className={paginationNumberClass}>3</p>
          </div>
          <div className={previousAndNextButtonClass}>
            <p>Next</p>
            <p>icon</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className={waitListContainerClass}>
      <div className={waitListHeaderClass}>
        <h2 className={waitListHeaderTitleClass}>WaitList</h2>
      </div>
      {renderWaitListFilterSection()}
      {renderTable()}
    </div>
  );
};

export default WaitList;
