export interface Genre {
  name: string;
}

export interface Chapter {
  id: number;
  title: string;
  overall_time: number;
  poster_path: string;
}

export interface Series {
  id: number;
  title: string;
  poster_path: string;
  genres: Genre[];
}
export interface SeriesDetails {
  id: number;
  poster_path: string;
  relase_date: string;
  overview: string;
  status: string;
  title: string;
  chapters: Chapter[];
  trailer: boolean;
}

export interface GenderList {
    id: number;
    name: string;
    series: Series[];
}

export interface FeaturedSeries {
  series: Series;
}
