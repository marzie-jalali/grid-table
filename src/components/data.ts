export interface Column {
  key: string;
  label: string;
}

export const mockColumns: Column[] = [
  { key: "name", label: "نام" },
  { key: "date", label: "تاریخ" },
  { key: "status", label: "وضعیت" },
  { key: "action", label: "عملیات" },
  { key: "job", label: "شغل" },
];

export interface Data {
  [key: string]: any;
  dataDetails?: Data[];
  isExpandable?: boolean;
}

export const sourceData: Data[] = [
  {
    name: "علی",
    date: "2023-01-01",
    status: "فعال",
    action: "ویرایش",
    job: "1233",
    isExpandable: true,
  },
  {
    name: "سارا",
    date: "2023-02-15",
    status: "غیرفعال",
    action: "حذف",
    job: "258963",
    isExpandable: true,
  },
];
