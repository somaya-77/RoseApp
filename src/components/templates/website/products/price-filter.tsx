"use client";

import { Controller } from "react-hook-form";
import { Input, Form, Label } from "@/components";
import { useFilterPriceHook } from "@/hooks/website/use-filter-price.hook";
import {HeaderFilter} from "..";
import FilterTitle from "./filter-title";


export default function PriceFilter() {
  //translations
  const { t, hasPriceFilter, form, trigger } = useFilterPriceHook()

  return (
    <div>
      <HeaderFilter filter="price" />
      {/* <FilterTitle
        title={t("price-title")}
        isFilterSelected={hasPriceFilter}
        paramsToReset={["price[gte]", "price[lte]"]}
        resetFn={() => {
          form.reset(
            { priceFrom: undefined, priceTo: undefined },
            { keepDefaultValues: false },
          );
        }}
      /> */}

      <Form {...form}>
        <form className="flex gap-2">
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
                      trigger("priceFrom"); 
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