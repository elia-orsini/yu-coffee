import SWRFetcher from "@/utils/SWRFetcher";
import useSWR from "swr";

export default function useRoasters() {
  const { data, error, isLoading } = useSWR(`/api/roasters`, SWRFetcher());

  return {
    roasters: data,
    isLoadingRoasters: isLoading,
    isError: error,
  };
}
