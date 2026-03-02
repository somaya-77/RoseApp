export const revalidate = 0;
export const DEFAULT_OCCASIONS_LIMIT = 6;
export const SKELETON_ITEMS_COUNT = 6;


export const formatXAxis = (tickItem: string) => {
    try {
        const date = new Date(tickItem);
        return date.toLocaleString("en-US", { month: "short" });
    } catch (e) {
        return tickItem;
    }
};

// STATUS COLORS
export const STATUS_COLORS: Record<string, string> = {
  completed: "#00BC7D",
  inProgress: "#2B7FFF",
  canceled: "#DC2626",
};

// FILTER STATUS
export const ALLOWED_STATUSES = ["completed", "inProgress", "canceled"];


// images
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];

// is mobile
export const MOBILE_BREAKPOINT = 768;


export const SIDEBAR_COOKIE_NAME = "sidebar_state"
export const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
export const SIDEBAR_WIDTH = "16rem"
export const SIDEBAR_WIDTH_MOBILE = "18rem"
export const SIDEBAR_WIDTH_ICON = "3rem"
export const SIDEBAR_KEYBOARD_SHORTCUT = "b"