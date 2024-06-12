import cn from "classnames";
import { useMemo, useState } from "react";

import Table from "@/common/Table/Table";
import { TableDataTypes, WaitListStatusTypes } from "@/types/tableTypes";
import { getWaitListEnum } from "@/utils/waitListUtils";
import { CalenderIcon, CircleDotIcon, HashIcon, UserIcon } from "@/icons";
import { observer } from "mobx-react-lite";

import {
  leadStatusDotContainerClass,
  statusContainerClass,
  statusTextClass,
  tableHeaderTextClass,
} from "./styles";
import "./styles.css";

interface Props {
  tableData: TableDataTypes[];
}

const WaitListTable = (props: Props): React.ReactElement => {
  const { tableData } = props;
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
      rowCheckboxes: isChecked ? tableData.map((each) => each.id) : [],
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
          tableData.length === [...checkedState.rowCheckboxes, id].length,
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
              className="w-[14px] h-[14px] cursor-pointer"
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
            <div>
              <CalenderIcon />
            </div>
            <p className={tableHeaderTextClass}>Created On</p>
          </div>
        ),
        accessor: "created_On",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[12.8%]">
            <div>
              <UserIcon />
            </div>
            <p className={tableHeaderTextClass}>Payer</p>
          </div>
        ),
        accessor: "payer",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[11.5%]">
            <div>
              <CircleDotIcon />
            </div>
            <p className={tableHeaderTextClass}>Status</p>
          </div>
        ),
        accessor: "status",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[17%]">
            <div>
              <HashIcon />
            </div>
            <p className={tableHeaderTextClass}>Email</p>
          </div>
        ),
        accessor: "email",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[12.3%]">
            <div>
              <HashIcon />
            </div>
            <p className={tableHeaderTextClass}>Payer Phone</p>
          </div>
        ),
        accessor: "payer_phone",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[17%]">
            <div>
              <HashIcon />
            </div>
            <p className={tableHeaderTextClass}>Services</p>
          </div>
        ),
        accessor: "services",
      },
      {
        Header: () => (
          <div className="flex items-center gap-[6px] w-[14.4%]">
            <div>
              <CalenderIcon />
            </div>
            <p className={tableHeaderTextClass}>Scheduled</p>
          </div>
        ),
        accessor: "scheduled",
      },
    ],
    [checkedState]
  );

  const data = useMemo(() => {
    return tableData.map((col) => {
      return {
        checkbox: (
          <div className="flex items-center gap-[6px] w-[20px]">
            <input
              type="checkbox"
              className="w-[14px] h-[14px] cursor-pointer"
              checked={checkedState.rowCheckboxes.includes(col.id)}
              onChange={handleRowCheckboxChange(col.id)}
            />
          </div>
        ),
        ...col,
        status: getWaitListStatus(getWaitListEnum(col.status)),
      };
    });
  }, [checkedState, tableData]);

  return (
    <div className="rounded-[6px] border border-solid border-[#EBEEF0] overflow-auto max-h-[460px] table-scroll">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default observer(WaitListTable);
