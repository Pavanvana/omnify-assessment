import React, { useState } from "react";
import { FilterTabsEnum, ServicesAndProductsEnum } from "@/types/filterTypes";
import Button from "@/common/Button/Button";
import FilterSidePane from "../FilterSidePane/FilterSidePane";
import DropDown from "@/common/DropDown/DropDown";
import { SearchIcon } from "@/icons";
import SearchField from "@/common/SearchField/SearchField";
import DatePicker from "@/common/DatePicker/DatePicker";
import {
  servicesTypeDropDownList,
  showOrdersDropDownList,
  statusDropDownList,
} from "@/constants/filterConstants";

import {
  FilterPopOverContainerClass,
  applyButtonClass,
  eachRadioButtonContainerClass,
  filterPopOverFooterButtonsContainer,
  filterPopOverFooterContainer,
  filterPopOverPeopleViewContainer,
  filterPopOverTopSection,
  radioButtonsClass,
  radioButtonsContainerClass,
  radioButtonsLabelClass,
  resetToDefaultButtonClass,
  searchInputContainerClass,
  searchInputFieldClass,
} from "./styles";

const FilterPopOverContainer = (): React.ReactElement => {
  const [filterActiveTab, setFilterActiveTab] = useState<FilterTabsEnum>(
    FilterTabsEnum.SCHEDULED_DATE
  );
  const [selectedShowOrderFor, setSelectedShowOrderFor] = useState<string>("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchPayerOrAttachedName, setSearchPayerOrAttachedName] =
    useState<string>("");
  const [servicesAndProductsSearch, setServicesAndProductsSearch] = useState(
    ServicesAndProductsEnum.SEARCH_BY_NAME
  );
  const [servicesType, setServicesType] = useState("");
  const [status, setStatus] = useState("");

  const renderScheduledDateFilterView = (): React.ReactElement => {
    return (
      <div className="p-[16px] z-10">
        <DropDown
          value={selectedShowOrderFor}
          onChange={setSelectedShowOrderFor}
          label="Show order for"
          placeholder="All time"
          dropDownList={showOrdersDropDownList}
        />
        <div className="flex items-center gap-[20px]">
          <DatePicker
            value={fromDate}
            onChange={setFromDate}
            label="From"
            className="w-[163px]"
          />
          <DatePicker
            value={toDate}
            onChange={setToDate}
            label="To"
            className="w-[163px]"
          />
        </div>
      </div>
    );
  };

  const renderPeopleFilterView = (): React.ReactElement => {
    return (
      <div className={filterPopOverPeopleViewContainer}>
        <div className={searchInputContainerClass}>
          <SearchIcon height={16} width={16} />
          <SearchField
            value={searchPayerOrAttachedName}
            onChange={setSearchPayerOrAttachedName}
            inputFieldClass={searchInputFieldClass}
            placeholder="Search Payer or attendee name"
            className="w-full"
          />
        </div>
      </div>
    );
  };

  const renderServicesProductsFilterView = (): React.ReactElement => {
    const renderViewBasedOnActiveRadioButton = (): React.ReactElement => {
      switch (servicesAndProductsSearch) {
        case ServicesAndProductsEnum.SEARCH_BY_NAME:
          return (
            <div className={searchInputContainerClass}>
              <SearchIcon height={16} width={16} />
              <SearchField
                value={searchPayerOrAttachedName}
                onChange={setSearchPayerOrAttachedName}
                inputFieldClass={searchInputFieldClass}
                placeholder="Search service name"
                className="w-full"
              />
            </div>
          );

        case ServicesAndProductsEnum.SEARCH_BY_Tags:
          return (
            <div className="flex flex-col">
              <DropDown
                value={servicesType}
                onChange={setServicesType}
                label="Service type"
                dropDownList={servicesTypeDropDownList}
                placeholder="Select service type"
              />
              <DropDown
                value={status}
                onChange={setStatus}
                label="Status"
                dropDownList={statusDropDownList}
                placeholder="Select status"
              />
            </div>
          );
      }
    };
    return (
      <div className="p-[16px]">
        <div className={radioButtonsContainerClass}>
          <div
            className={eachRadioButtonContainerClass}
            onClick={() => {
              setServicesAndProductsSearch(
                ServicesAndProductsEnum.SEARCH_BY_NAME
              );
            }}
          >
            <input
              type="radio"
              id="searchServiceName"
              className={radioButtonsClass}
              name="searchServiceNameAndProduct"
              checked={
                servicesAndProductsSearch ===
                ServicesAndProductsEnum.SEARCH_BY_NAME
              }
            />
            <label
              htmlFor="searchServiceName"
              className={radioButtonsLabelClass}
            >
              Search by Name
            </label>
          </div>
          <div
            className={eachRadioButtonContainerClass}
            onClick={() => {
              setServicesAndProductsSearch(
                ServicesAndProductsEnum.SEARCH_BY_Tags
              );
            }}
          >
            <input
              type="radio"
              id="searchServiceTags"
              name="searchServiceNameAndProduct"
              className={radioButtonsClass}
              checked={
                servicesAndProductsSearch ===
                ServicesAndProductsEnum.SEARCH_BY_Tags
              }
            />
            <label
              htmlFor="searchServiceTags"
              className={radioButtonsLabelClass}
            >
              Search by tags
            </label>
          </div>
        </div>
        {renderViewBasedOnActiveRadioButton()}
      </div>
    );
  };

  const renderFilterViewBasedOnActiveItem = (): React.ReactElement => {
    switch (filterActiveTab) {
      case FilterTabsEnum.SCHEDULED_DATE:
        return renderScheduledDateFilterView();
      case FilterTabsEnum.PEOPLE:
        return renderPeopleFilterView();
      case FilterTabsEnum.SERVICES_PRODUCTS:
        return renderServicesProductsFilterView();
    }
  };

  return (
    <div className={FilterPopOverContainerClass}>
      <div className={filterPopOverTopSection}>
        <FilterSidePane
          filterActiveTab={filterActiveTab}
          setFilterActiveTab={setFilterActiveTab}
        />
        <div className="w-[382px] h-[348px] border-l border-solid border-[#E2E8F0]">
          {renderFilterViewBasedOnActiveItem()}
        </div>
      </div>
      <div className={filterPopOverFooterContainer}>
        <div className={filterPopOverFooterButtonsContainer}>
          <Button
            buttonText="Reset to Default"
            className={resetToDefaultButtonClass}
            size="medium"
          />
          <Button
            buttonText="Apply"
            size="medium"
            className={applyButtonClass}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterPopOverContainer;
