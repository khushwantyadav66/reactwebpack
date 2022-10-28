import React from "react";

export interface MovieItem {
  id: number;
  title: string;
  genres: string[];
  releaseDate: string;
  posterPath: string;
}

export default function MovieCard({
  title,
  genres,
  releaseDate,
  posterPath
}: MovieItem) {
  return (
    <div className='movie-card'>
      <img src={posterPath} className='movie-card__image' alt={title} />
      <div className='movie-card__details'>
        <span className='movie-card__title'>{title}</span>
        <div className='movie-card__release-date'>
          <span>{releaseDate.split('-')[0]}</span>
        </div>
        <span className='movie-card__genres'>{genres.join(', ')}</span>
      </div>
    </div>
  );
}
