import { apiSupabase } from "../apiEndpoints";

export const fetchFeaturedSeries = async () => {
    const response = await apiSupabase.get('series_poster?select=*');
    return response.data;
}

export const fetchGenderSeriesList = async () => {
    const response = await apiSupabase.get('gender_serires_list?select=*');
    return response.data;
}

export const fetchSeriesDetails = async (id: string) => {
    const response = await apiSupabase.get(`series_with_chapters?id=eq.${id}`);
    return response.data;
}
