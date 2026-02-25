import React, { useState } from "react";
import type { Column, Data } from "./data";
import { TableHeader, TableElementWrapper, TableRow } from "../style";
import { Icon } from "nakit";

interface TableProps {
  columns: Column[];
  data: Data[];
}

const GridTable: React.FC<TableProps> = ({ columns, data }) => {
  const [expandTable, setExpandTable] = useState();

  const rowHasExpandable = data.some((row) => row.isExpandable);
  const nestedTableHandle = (rowId: number) => {};
  return (
    <TableElementWrapper>
      <TableHeader
        columnsCount={columns.length}
        hasExpandable={rowHasExpandable}
      >
        <div></div>
        {rowHasExpandable && <div></div>}
        {columns.map((col) => (
          <div key={col.key}>{col.label}</div>
        ))}
      </TableHeader>
      {data.map((row, rowId) => (
        <TableRow
          columnsCount={columns.length}
          hasExpandable={rowHasExpandable}
          key={rowId}
        >
          {rowHasExpandable && (
            <div>
              {row.isExpandable && (
                <Icon
                  size="1.25"
                  iconName="arrowLeftBlack"
                  onClick={() => nestedTableHandle(rowId)}
                />
              )}
            </div>
          )}

          {columns.map((col) => (
            <div key={col.key}>{row[col.key]}</div>
          ))}
        </TableRow>
      ))}
    </TableElementWrapper>
  );
};

export default GridTable;
