"use client";
import React, { useState } from "react";
import { Button, DialogTrigger } from "react-aria-components";

import SearchField from "@/common/SearchField/SearchField";
import IconButton from "@/common/IconButton/IconButton";
import ReactPopover from "@/common/ReactPopover/ReactPopover";
import WaitListTable from "../WaitListTable/WaitListTable";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  ColumnIcon,
  DownloadIcon,
  FilterIcon,
  RefreshIcon,
  SearchIcon,
} from "@/icons";

import {
  FilterPopOverContainerClass,
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
  const [isFilterPopOverOpen, setIsFilterPopOverOpen] =
    useState<boolean>(false);
  console.log(isFilterPopOverOpen, "isFilterPopOverOpen");

  const renderFilterPopOver = (): React.ReactElement => (
    <ReactPopover placement="top" offset={20}>
      <div className={FilterPopOverContainerClass}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </ReactPopover>
  );

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
          <DialogTrigger isOpen={isFilterPopOverOpen}>
            <Button className="border-none bg-transparent outline-none p-0 max-[700px]:hidden">
              <div
                className={filterContainerClass}
                onClick={() => setIsFilterPopOverOpen(!isFilterPopOverOpen)}
              >
                <FilterIcon />
                <p className={filterTextClass}>Add Filter</p>
              </div>
            </Button>
            <ReactPopover>{renderFilterPopOver()}</ReactPopover>
          </DialogTrigger>
        </div>
        <div className="flex items-center gap-[16px]">
          <div className={searchInputContainerClass}>
            <SearchIcon />
            <SearchField
              value={searchValue}
              onChange={setSearchValue}
              inputFieldClass={searchInputFieldClass}
              placeholder="Search client"
              className="w-full"
            />
          </div>
          <IconButton icon={<RefreshIcon />} onClick={() => {}} />
          <IconButton
            icon={<ColumnIcon stroke="#334155" />}
            onClick={() => {}}
          />
          <IconButton icon={<DownloadIcon />} onClick={() => {}} />
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
            <ChevronsUpDown />
          </div>
          <p className="text-[14px] font-medium font-sans text-[#64748B]">
            out of <span className="text-[#18181B]">104</span>
          </p>
        </div>
        <div className="flex items-center mr-[75px]">
          <div className={previousAndNextButtonClass}>
            <ChevronLeft />
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
            <ChevronRight />
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
