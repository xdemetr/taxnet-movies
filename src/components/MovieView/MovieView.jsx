import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { getMovieById } from '../../store/movieReducer';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import Tags from '../Tags';
import BackButton from '../BackButton';
import Alert from '../Alert';

import './MovieView.sass';

const MovieView = ({ current, getMovieById, match: { params: { id: currentId } }, error, ...props }) => {
  useEffect(() => {
    getMovieById(currentId)
  }, [getMovieById, currentId]);

  if (error) return <Alert>{error}</Alert>;
  if (!current) return null;

  const { id, title, tags } = current;

  const colors = ['coral', 'aquamarine', 'burlywood', 'goldenrod', 'darkolivegreen', 'cornflowerblue'];
  const imageBg = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="movie-view">

      <div className="movie-view__image-box">
        <div className="movie-view__image" style={{ background: imageBg }}></div>
      </div>

      <div className="movie-view__content">
        <h2 className="movie-view__title">{title}</h2>
        <FavoriteButton id={id} view="full"/>

        <Tags tags={tags} mix="movie-view__tags"/>
      </div>

      <aside className="movie-view__aside">
        <BackButton handleClick={props.history.goBack}/>
      </aside>
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.movies.current,
  error: state.movies.error
});

export default compose(
  connect(mapStateToProps, { getMovieById }),
  withRouter
)(MovieView);
