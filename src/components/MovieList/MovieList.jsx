import React from 'react';
import MoviePreview from '../MoviePreview';
import Alert from '../Alert';
import Paginator from '../Paginator';

import './MovieList.sass';

const MovieList = ({ items, error }) => {
  if (error) return <Alert>{error}</Alert>;
  if (!items) return null;

  const renderItems = items.map(item => {
    return (
      <div className="movie-list__item" key={item.id}>
        <MoviePreview movie={item}/>
      </div>
    )
  });

  return (
    <div className="movie-list">
      {renderItems}
      <Paginator/>
    </div>
  );
};

export default MovieList;
