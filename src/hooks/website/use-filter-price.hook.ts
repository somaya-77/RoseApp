import { useEffect, useMemo } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type Resolver } from "react-hook-form";
import { PriceFilterForm } from "@/lib/types/props.type";
import { useDebounce } from "@/hooks/website/use-debounce.hook";
import { useUrlParams } from "@/hooks/website/use-url-params.hook";
import { priceFilterSchema } from "@/lib/schemas/filter-price.schema";


export function useFilterPriceHook() {
    const t = useTranslations("products");

    //form
    const form = useForm<PriceFilterForm>({
        resolver: zodResolver(priceFilterSchema(t)) as Resolver<PriceFilterForm>,
        mode: "onChange",
        defaultValues: {
            priceFrom: undefined,
            priceTo: undefined,
        },
    });

    //variables
    const watchedValues = form.watch();
    const { trigger } = form;

    //hooks
    const { setParam } = useUrlParams();
    const debouncedPriceFrom = useDebounce(watchedValues.priceFrom ?? "", 1000);
    const debouncedPriceTo = useDebounce(watchedValues.priceTo ?? "", 1000);
    const priceParamFilter = useSearchParams();
    const hasPriceFilter = useMemo(() => {
        const gte = priceParamFilter.get("price[gte]");
        const lte = priceParamFilter.get("price[lte]");
        return Boolean(gte?.trim()) || Boolean(lte?.trim());
    }, [priceParamFilter]);

    //initialize prices from url if exists
    useEffect(() => {
        const gte = priceParamFilter.get("price[gte]");
        const lte = priceParamFilter.get("price[lte]");

        form.setValue("priceFrom", gte ? Number(gte) : undefined);
        form.setValue("priceTo", lte ? Number(lte) : undefined);
    }, [priceParamFilter, form]);


    //set prices on url after user end typing
    useEffect(() => {
        if (form.formState.isValidating) return;
        if (!form.formState.isValid) return;

        // Only update URL if debounced values are in sync with current form values
        const currentFrom = watchedValues.priceFrom ?? "";
        const currentTo = watchedValues.priceTo ?? "";

        if (String(debouncedPriceFrom) !== String(currentFrom)) return;
        if (String(debouncedPriceTo) !== String(currentTo)) return;

        setParam([
            ["price[gte]", debouncedPriceFrom ? String(debouncedPriceFrom) : null],
            ["price[lte]", debouncedPriceTo ? String(debouncedPriceTo) : null],
        ]);
    }, [
        debouncedPriceFrom,
        debouncedPriceTo,
        form.formState.isValid,
        form.formState.isValidating,
        watchedValues.priceFrom,
        watchedValues.priceTo,
        setParam,
    ]);

    return {
        t, hasPriceFilter, form, trigger
    }
}