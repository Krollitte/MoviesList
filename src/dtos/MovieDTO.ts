interface GenresProps {
  id: number;
  name: string;
}

export interface MovieDTO {
  backdrop_path: string;
  homepage: string;
  id: string;
  imdb_id: string;
  genres: GenresProps[];
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  status: string;
  title: string;
  vote_average: number;
  vote_count: number;
}
