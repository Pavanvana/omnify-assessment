import React from "react";
import { useTable } from "react-table";
import "./styles.css";

interface TableProps {
  columns: any[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }): React.ReactElement => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table
      {...getTableProps()}
      style={{
        width: "100%",
      }}
    >
      <thead className="bg-[#F8FAFC] h-[36px]">
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="w-full h-[36px]"
            key={headerGroup.id}
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="p-[8px_0px_8px_16px]"
                key={column.id}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr
              {...row.getRowProps()}
              className="border-t border-solid border-[#EBEEF0] h-[40px] p-[16px]"
              key={row.id}
            >
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="truncate text-[12px] text-[#374151] font-medium p-[8px_0px_8px_16px]"
                    title={cell.value}
                    key={cell.column.id}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
