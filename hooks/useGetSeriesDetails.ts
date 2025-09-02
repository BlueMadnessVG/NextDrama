import { SeriesDetails } from "@/interfaces/interfaces";
import { fetchSeriesDetails } from "@/services/Supabase/Series.service";
import { useEffect, useState } from "react";

/**
 * Custom hook to fetch detailed info for a series by ID from the backend.
 * Returns loading state and fetched data.
 *
 * Usage:
 *   const { loading, data } = useGetSeriesDetails({ id });
 *
 * - loading: boolean - true while fetching, false when done
 * - data: SeriesDetails | undefined - detailed info for the series
 */
export const useGetSeriesDetails = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<SeriesDetails>();

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
    
        const fetchData = async () => {
          const series = await fetchSeriesDetails(id);
          setData(series[0]);
          setLoading(false);
        };
    
        fetchData();
    
        return () => {
          controller.abort();
        };
      }, [id]);
    
      return { loading, data };
}