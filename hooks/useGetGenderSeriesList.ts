import { GenderList } from "@/interfaces/interfaces";
import { fetchGenderSeriesList } from "@/services/Supabase/Series.service";
import { useEffect, useState } from "react";

/**
 * Custom hook to fetch series list by gender from the backend.
 * Returns loading state and fetched data.
 *
 * Usage:
 *   const { loading, data } = useGetGenderSeriesList();
 *
 * - loading: boolean - true while fetching, false when done
 * - data: GenderList[] - array of series grouped by gender
 */
export const useGetGenderSeriesList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<GenderList[]>([]);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();

    const fetchData = async () => {
      const series = await fetchGenderSeriesList();
      setData(series);
      setLoading(false);
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { loading, data };
};
