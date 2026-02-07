/////////////////////
export type Status = "default" | "error" | "disabled";



export type SearchParams = {
searchParams: Promise<{ [key: string]: string | string[] | undefined }>; 
}

export type PaginationLinkProps = {
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type SearchInputProps = React.ComponentProps<"input"> & {
  status?: Status;
};

export type SelectProps = React.ComponentProps<"select"> & {
  status?: Status;
};

export type InputProps = React.ComponentProps<"input"> & {
  status?: Status;
};





export type Notification = {
  id: number;
  title: string;
  description: string;
  read: boolean;
}

export type NotificationsResponse = {
  data: Notification[];
}




export type Result<T> =
  | {
      success: true;
      data: T[];
    }
  | {
      success: false;
      error: string;
      data: [];
    };









// CATEGORIES

export type MetaData = {
  currentPage: number;
    totalPages: number;
    limit: number;
    totalItems: number;
}




