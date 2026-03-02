"use client";

import CardHeaderChart from "./card-header";
import { Card } from "@/components";
import { useTranslations } from "next-intl";
import RevenueChartContent from "./revenue-chart-content";
import { OrderStatus } from "@/lib/types/dashboard.type";

export default function RevenueChart({ data }: { data: OrderStatus[] }) {
  // TRANSLATE
  const t = useTranslations("order");

  return (
    <Card className="shadow-none">
      {/* card header */}
      <CardHeaderChart t={t} />
      {/* card content */}
      <RevenueChartContent data={data} />
    </Card>
  );
}