import type { ChildRow, Column, EmployeeData, EmployeeRow } from "./data";
import { TableHeader, TableElementWrapper, TableRow } from "../style";
import { Icon } from "nakit";
import NestedTable from "./nested-table";
import { childColumns } from "./data";
import React, { useState } from "react";

interface GridTableProps {
  columns: Column<EmployeeRow>[];
  data: EmployeeData[];
  childColumns: Column<ChildRow>[];
}

const GridTable = ({ columns, data }: GridTableProps) => {
  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});
  console.log(data);
  const rowHasExpandable = data.some((row) => row.isExpandable);
  const nestedTableHandle = (Id: number) => {
    setExpandedRows((prev) => ({
      ...prev,
      [Id]: !prev[Id],
    }));
  };
  return (
    <TableElementWrapper>
      <TableHeader
        columnsCount={columns.length}
        hasExpandable={rowHasExpandable}
      >
        {rowHasExpandable && <div></div>}
        {columns.map((col) => (
          <div key={col.key}>{col.label}</div>
        ))}
      </TableHeader>
      {data.map((row, rowId) => (
        <React.Fragment key={rowId}>
          <TableRow
            columnsCount={columns.length}
            hasExpandable={rowHasExpandable}
          >
            {rowHasExpandable && (
              <div>
                {row.isExpandable && (
                  <Icon
                    size="1.25"
                    iconName={
                      expandedRows[rowId]
                        ? "arrowDropDownBlack"
                        : "arrowLeftBlack"
                    }
                    onClick={() => nestedTableHandle(rowId)}
                  />
                )}
              </div>
            )}
            {columns.map((col) => (
              <div key={col.key}>{row[col.key]}</div>
            ))}
            <div>
              {expandedRows[rowId] && row.children && (
                <div>
                  <br />
                  <NestedTable data={row.children} columns={childColumns} />
                </div>
              )}
            </div>
          </TableRow>
        </React.Fragment>
      ))}
    </TableElementWrapper>
  );
};

export default GridTable;
