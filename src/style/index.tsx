import styled from "@emotion/styled";
import { type AppThemeModel } from "nakit";

export const TableElementWrapper = styled.div<{
  theme?: AppThemeModel;
}>(({ theme }) => {
  return {
    display: "grid",
    gridTemplateRows: "auto",
    border: `1px solid ${theme.color.ordinalColors.gray[600]}`,
    borderRadius: theme.spacing.spacing16Px,
    width: "100%",
    direction: "rtl",
    overflowX: "auto",
  };
});

export const TableHeader = styled.div<{
  theme?: AppThemeModel;
  columnsCount: number;
  hasExpandable: boolean;
}>(({ theme, columnsCount, hasExpandable }) => {
  return {
    display: "grid",
    gridTemplateColumns: hasExpandable
      ? `${theme.spacing.spacing40Px} repeat(${columnsCount}, 1fr)  `
      : `repeat(${columnsCount}, 1fr) `,
    backgroundColor: theme.color.ordinalColors.gray[600],
    alignItems: "center",
    padding: `${theme.spacing.spacing12Px} ${theme.spacing.spacing24Px}`,
  };
});

export const TableRow = styled.div<{
  theme?: AppThemeModel;
  columnsCount: number;
  hasExpandable: boolean;
}>(({ theme, columnsCount, hasExpandable }) => {
  return {
    display: "grid",
    gridTemplateColumns: hasExpandable
      ? `${theme.spacing.spacing40Px} repeat(${columnsCount}, 1fr)  `
      : `repeat(${columnsCount}, 1fr) `,
    minWidth: "max-content",
    alignItems: "center",
    borderBottom: `1px solid ${theme.color.ordinalColors.gray[600]}`,
    "&:last-child": {
      borderBottom: "none",
    },
    padding: `${theme.spacing.spacing12Px} ${theme.spacing.spacing24Px}`,
  };
});
