"use client";

import FilterTitle from "./filter-title";
import { Controller } from "react-hook-form";
import { Input, Form, FormMessage, Label } from "@/components";
import { useFilterPriceHook } from "@/hooks/website/use-filter-price.hook";


export default function PriceFilter() {
  //translations
  const { t, hasPriceFilter, form, trigger } = useFilterPriceHook()

  return (
    <div>
      <FilterTitle
        title={t("price-title")}
        isFilterSelected={hasPriceFilter}
        paramsToReset={["price[gte]", "price[lte]"]}
        resetFn={() => {
          form.reset(
            { priceFrom: undefined, priceTo: undefined },
            { keepDefaultValues: false },
          );
        }}
      />

      <Form {...form}>
        <form className="flex gap-2 pb-5 border-b">
          <Controller
            control={form.control}
            name="priceFrom"
            render={({ field }) => (
              <div className="col-span-1">
                {/* Label */}
                <Label>{t("price-from-label")}</Label>

                {/* Input */}
                  <Input
                    {...field}
                    placeholder="0"
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e);
                      trigger("priceTo"); // re-validate priceFrom when priceTo changes
                    }}
                  />
                {/* Error Message */}
                {/* <FormMessage /> */}
              </div>
            )}
          />
          <Controller
            control={form.control}
            name="priceTo"
            render={({ field }) => (
              <div className="col-span-1">
                {/* Label */}
                <Label>{t("price-to-label")}</Label>

                {/* Input */}
                  <Input
                    {...field}
                    placeholder="10000"
                    value={field.value || ""}
                    onChange={(e) => {
                      field.onChange(e);
                      trigger("priceFrom"); // re-validate PriceTo when PriceFrom changes
                    }}
                  />

                {/* Error Message */}
                {/* <FormMessage /> */}
              </div>
            )}
          />
        </form>
      </Form>
    </div>
  );
}