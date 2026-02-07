import { toReadableQueryString } from "@/lib/utils";
import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export { toReadableQueryString };

export function useUrlParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentParamsString = searchParams.toString();

  const pushQuery = useCallback(
    (params: URLSearchParams) => {
      const newQueryString = toReadableQueryString(params.toString());
      
      if (newQueryString === toReadableQueryString(currentParamsString)) {
        return;
      }

      router.push(`?${newQueryString}`, {
        scroll: false,
      });
    },
    [router, currentParamsString] 
  );

  const appendParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(currentParamsString);
      const currentValues = params.getAll(key);

      if (!currentValues.includes(value)) {
        params.append(key, value);
        pushQuery(params);
      }
    },
    [currentParamsString, pushQuery]
  );

  const toggleParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(currentParamsString);
      const currentValue = params.get(key);

      if (currentValue === value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }

      pushQuery(params);
    },
    [currentParamsString, pushQuery]
  );

  const setMultipleParams = useCallback(
    (key: string, values: string[]) => {
      const params = new URLSearchParams(currentParamsString);
      params.delete(key);
      values.forEach((value) => params.append(key, value));
      pushQuery(params);
    },
    [currentParamsString, pushQuery]
  );

  const setParam = useCallback(
    (entries: [string, string | null][]) => {
      const params = new URLSearchParams(currentParamsString);

      entries.forEach(([key, value]) => {
        if (value === null || value === "") {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      });

      pushQuery(params);
    },
    [currentParamsString, pushQuery]
  );

  return { appendParam, toggleParam, setMultipleParams, setParam };
}