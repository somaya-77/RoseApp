import * as RPNInput from "react-phone-number-input";


export type Status = "default" | "error" | "disabled";

export type CountrySelectProps = {
    disabled?: boolean;
    value: RPNInput.Country;
    options: { label: string; value: RPNInput.Country |undefined }[];
    onChange: (country: RPNInput.Country) => void;
    status?: Status;
};

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

