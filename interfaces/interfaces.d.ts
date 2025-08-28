interface Movie {
   id: number;
   title: string;
   backdrop_path: string;
   genre_ids: number[];
   original_title: string;
   overview: string;
   poster_path: string;
   video: boolean; 
}

interface TrendingMovie {
    searchTerm: string;
    movie_id: number;
    title: string;
    count: number;
    poster_url: string;
}

interface MovieDetails {
    backdrop_path: string | null;
    belong_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    } | null;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string | null;
    id: number;
    poster_path: string;
    release_date: string;
    runtime: number | null;
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
}

interface TrendingCardProps {
    movie: TrendingMovie;
    index: number;
}