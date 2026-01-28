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

export enum TestimonialStatus {
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected",
}

export type Testimonial = {
    _id: string,
    user: {
        _id: string,
        firstName: string,
        lastName: string,
        photo: string,
    },
    rating: number,
    content: string,
    status: TestimonialStatus,
    featured: boolean,
    createdAt: string,
    updatedAt: string,
    __v: number,
}

export type Testimonials = {
    testimonials: Testimonial[]
}

export type Occasion = {
  _id: string;
  name: string;
  slug: string;
  image: string;

  productsCount: number;
};

export type OccasionResponse = {
  occasions: Occasion[];
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

export type BestSellingProduct = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  imgCover: string;
  images: string[];
  price: number;
  priceAfterDiscount: number;
  quantity: number;
  category: string;
  occasion: string;

  sold: number;
  rateAvg: number;
  rateCount: number;
};
export type BestSellingResponse = {
  products: BestSellingProduct[];
};

export interface GetBestSellingParams {
  filter?: string;
  occasion?: string;

  limit?: number;
}



