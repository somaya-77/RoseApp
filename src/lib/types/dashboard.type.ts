type Statistics = {
  totalProducts: number;
  totalOrders: number;
  totalCategories: number;
  totalRevenue: number;
};

export type StatisticsResponse = {
  message: string;
  statistics: Statistics;
};

type CategoriesStats = {
  _id: string;
  name: string;
  totalProducts: number;
  totalRevenue: number;
};

export type CategoriesStatisticsResponse = {
  message: string;
  statistics: CategoriesStats[];
};

//DASHBOARD
export type OrderStatus = {
    _id: string;
    revenue?: number;
    count: number;
}