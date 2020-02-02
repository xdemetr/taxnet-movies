import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getMoviesByTitle } from '../../../store/movieReducer';
import { Link, withRouter } from 'react-router-dom';
import MovieList from '../../MovieList';
import Alert from '../../Alert';
import BackButton from '../../BackButton';

import './SearchPage.sass';

const SearchPage = ({ getMoviesByTitle, items, error, match: { params: { query } } }) => {
  useEffect(() => {
    getMoviesByTitle(query);
  }, [getMoviesByTitle, query]);

  if (!query) return (
    <Alert>
      <p>Введите поисковый запрос.</p>
      <p>Или вернитесь на <Link to={'/'}>главную</Link>.</p>
    </Alert>
  );

  return (
    <div className="search-page">
      <div className="search-page__content">
        <Alert>{error}</Alert>
        <MovieList items={items}/>
      </div>
      <aside className="search-page__aside">
        <BackButton content="home" href="/all">На главную</BackButton>
      </aside>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.movies.list,
  error: state.movies.error
});

export default compose(
  connect(mapStateToProps, { getMoviesByTitle }),
  withRouter
)(SearchPage);

