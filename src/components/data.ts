export interface EmployeeRow {
  name: string;
  date: string;
  status: "فعال" | "غیرفعال";
  action: "ویرایش" | "حذف" | "مشاهده";
  job: string;
}

// ── نوع داده ردیف فرزند
export interface ChildRow {
  fullName: string;
  joinDate: string;
  state: "فعال" | "غیرفعال";
  task: "ویرایش" | "حذف";
  employeeId: string;
}

export interface Column<T> {
  key: keyof T;
  label: string;
}

export const mockColumns: Column<EmployeeRow>[] = [
  { key: "name", label: "نام" },
  { key: "date", label: "تاریخ" },
  { key: "status", label: "وضعیت" },
  { key: "action", label: "عملیات" },
  { key: "job", label: "شغل" },
];

export const childColumns: Column<ChildRow>[] = [
  { key: "fullName", label: "نام فرزند" },
  { key: "joinDate", label: "تاریخ پیوستن" },
  { key: "state", label: "وضعیت" },
  { key: "task", label: "عملیات" },
  { key: "employeeId", label: "شناسه کارمند" },
];

export interface EmployeeData extends EmployeeRow {
  isExpandable?: boolean;
  children?: ChildRow[];
}

export const sourceData: EmployeeData[] = [
  {
    name: "علی",
    date: "2023-01-01",
    status: "فعال",
    action: "ویرایش",
    job: "1233",
    isExpandable: true,
    children: [
      {
        fullName: "محمد",
        joinDate: "2023-01-05",
        state: "فعال",
        task: "ویرایش",
        employeeId: "5678",
      },
      {
        fullName: "فاطمه",
        joinDate: "2023-01-07",
        state: "غیرفعال",
        task: "حذف",
        employeeId: "91011",
      },
    ],
  },
  {
    name: "سارا",
    date: "2023-02-15",
    status: "غیرفعال",
    action: "حذف",
    job: "258963",
    isExpandable: true,
    children: [
      {
        fullName: "نگار",
        joinDate: "2023-02-20",
        state: "فعال",
        task: "ویرایش",
        employeeId: "334455",
      },
    ],
  },
];
