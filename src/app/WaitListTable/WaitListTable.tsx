import { useMemo, useState } from "react";
import cn from "classnames";
import Table from "@/common/Table/Table";
import { WaitListStatusTypes } from "@/types/tableTypes";
import { getWaitListEnum } from "@/utils/waitListUtils";
import { tableDummyData } from "@/constants/tableConstants";

import {
  leadStatusDotContainerClass,
  statusContainerClass,
  statusTextClass,
  tableHeaderTextClass,
} from "./styles";
import "./styles.css";

const WaitListTable = (): React.ReactElement => {
  const [checkedState, setCheckedState] = useState<{
    headerCheckbox: boolean;
    rowCheckboxes: number[];
  }>({
    headerCheckbox: false,
    rowCheckboxes: [],
  });

  const handleHeaderCheckboxChange = (e: any): void => {
    const isChecked = e.target.checked;
    setCheckedState({
      headerCheckbox: isChecked,
      rowCheckboxes: isChecked ? tableDummyData.map((each) => each.id) : [],
    });
  };

  const handleRowCheckboxChange =
    (id: number) =>
    (e: any): void => {
      const isIdChecked = checkedState.rowCheckboxes.includes(id);

      if (isIdChecked) {
        setCheckedState({
          headerCheckbox: false,
          rowCheckboxes: checkedState.rowCheckboxes.filter(
            (each) => each !== id
          ),
        });
        return;
      }

      setCheckedState({
        headerCheckbox:
          tableDummyData.length === [...checkedState.rowCheckboxes, id].length,
        rowCheckboxes: [...checkedState.rowCheckboxes, id],
      });
    };

  const getWaitListStatus = (status: string): React.ReactElement => {
    switch (status) {
      case WaitListStatusTypes.ACTIVE:
        return (
          <div className={cn(statusContainerClass, "bg-[#F0FDF9]")}>
            <div
              className={cn(leadStatusDotContainerClass, "bg-[#15803D] ")}
            ></div>
            <div className={cn(statusTextClass, "text-[#15803D]")}>Active</div>
          </div>
        );
      case WaitListStatusTypes.INACTIVE:
        return (
          <div className={cn(statusContainerClass, "bg-[#F1F5F9]")}>
            <div
              className={cn(leadStatusDotContainerClass, "bg-[#334155] ")}
            ></div>
            <div className={cn(statusTextClass, "text-[#334155]")}>
              Inactive
            </div>
          </div>
        );
      case WaitListStatusTypes.LEAD:
        return (
          <div className={cn(statusContainerClass, "bg-[#EFF6FF]")}>
            <div
              className={cn(leadStatusDotContainerClass, "bg-[#3B82F6] ")}
            ></div>
            <div className={cn(statusTextClass, "text-[#3B82F6]")}>Lead</div>
          </div>
        );

      default:
        return <></>;
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[20px]">
            <input
              className="w-[14px] h-[14px]"
              type="checkbox"
              checked={checkedState.headerCheckbox}
              onChange={handleHeaderCheckboxChange}
            />
          </div>
        ),
        accessor: "checkbox",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[14.5%]">
            <p>icon</p>
            <p className={tableHeaderTextClass}>Created On</p>
          </div>
        ),
        accessor: "created_On",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[12.8%]">
            <p>icon</p>
            <p className={tableHeaderTextClass}>Payer</p>
          </div>
        ),
        accessor: "payer",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[11.5%]">
            <p>icon</p>
            <p className={tableHeaderTextClass}>Status</p>
          </div>
        ),
        accessor: "status",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[17%]">
            <p>icon</p>
            <p className={tableHeaderTextClass}>Email</p>
          </div>
        ),
        accessor: "email",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[12.3%]">
            <p>icon</p>
            <p className={tableHeaderTextClass}>Payer Phone</p>
          </div>
        ),
        accessor: "payer_phone",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[17%]">
            <p>icon</p>
            <p className={tableHeaderTextClass}>Services</p>
          </div>
        ),
        accessor: "services",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[14.4%]">
            <p>icon</p>
            <p className={tableHeaderTextClass}>Scheduled</p>
          </div>
        ),
        accessor: "scheduled",
      },
    ],
    [checkedState]
  );

  const data = useMemo(() => {
    return tableDummyData.map((col) => {
      return {
        checkbox: (
          <div className="flex items-center gap-[6px] w-[20px]">
            <input
              type="checkbox"
              className="w-[14px] h-[14px]"
              checked={checkedState.rowCheckboxes.includes(col.id)}
              onChange={handleRowCheckboxChange(col.id)}
            />
          </div>
        ),
        ...col,
        status: getWaitListStatus(getWaitListEnum(col.status)),
      };
    });
  }, [checkedState]);

  return (
    <div className="rounded-[6px] border border-solid border-[#EBEEF0] overflow-auto max-h-[460px] table-scroll">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default WaitListTable;
