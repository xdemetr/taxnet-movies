import React from 'react';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { Link } from 'react-router-dom';
import Tags from '../Tags';

import './MoviePreview.sass';

const MoviePreview = ({ movie }) => {

  if (!movie) return null;

  const { id, title, tags } = movie;

  return (
    <div className="movie-preview">
      <h3 className="movie-preview__title">
        <Link to={`/movie/${id}`}>
          {title}
        </Link>
      </h3>

      <Tags tags={tags} mix="movie-preview__tags"/>

      <div className="movie-preview__actions">
        <FavoriteButton id={id}/>
      </div>
    </div>
  );
};

export default MoviePreview;
