import { Series } from "@/interfaces/interfaces";
import { fetchFeaturedSeries } from "@/services/Supabase/Series.service";
import { useEffect, useState } from "react";

interface Params {
    loading: boolean;
    data: Series[];
}

/**
 * Custom hook to fetch featured series from the backend.
 * Returns loading state and fetched data.
 *
 * Usage:
 *   const { loading, data } = useGetFeaturedSeries();
 *
 * - loading: boolean - true while fetching, false when done
 * - data: Series[]   - array of featured series
 */
export const useGetFeaturedSeries = (): Params => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<Series[]>([]);

    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();

        const fetchData = async () => {
            const series = await fetchFeaturedSeries();
            setData(series);
            setLoading(false);
        };

        fetchData();

        return () => {
            controller.abort();
        }
    }, []);

    return { loading, data };
};