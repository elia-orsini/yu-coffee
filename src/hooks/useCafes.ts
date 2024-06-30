import SWRFetcher from "@/utils/SWRFetcher";
import useSWR from "swr";

export default function useCafes() {
  const { data, error, isLoading } = useSWR(`/api/cafes`, SWRFetcher());

  return {
    cafes: data,
    isLoadingCafes: isLoading,
    isError: error,
  };
}
