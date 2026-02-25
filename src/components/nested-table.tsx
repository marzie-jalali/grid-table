import React from "react";
import type { ChildRow, Column } from "./data";
import { NestedHeaderTable, NestedTableContainer } from "../style/nested-table";

interface NestedTableProps {
  columns: Column<ChildRow>[];
  data: ChildRow[];
}

const NestedTable = ({ columns, data }: NestedTableProps) => {
  return (
    <div>
      <NestedTableContainer>
        <NestedHeaderTable>
          {columns.map((col) => (
            <div key={col.key}>{col.label}</div>
          ))}
        </NestedHeaderTable>
      </NestedTableContainer>
    </div>
  );
};

export default NestedTable;
