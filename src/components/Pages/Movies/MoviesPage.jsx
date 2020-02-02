import React, { useEffect } from 'react';
import MainTabs from '../../MainTabs/MainTabs';
import MovieList from '../../MovieList/MovieList';
import { connect } from 'react-redux';
import { getMovies } from '../../../store/movieReducer';
import { updateTab } from '../../../store/appReducer';
import { getMoviesReselect } from '../../../store/selectors';

const MoviesPage = ({ items, getMovies, updateTab, error }) => {
  useEffect(() => {
    getMovies();
    updateTab('all');
  }, [getMovies, updateTab, items]);

  return (
    <div className="movies-page">
      <MainTabs mix="app__page-header"/>
      <MovieList items={items} error={error}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: getMoviesReselect(state),
  error: state.movies.error
});

export default connect(mapStateToProps, { getMovies, updateTab })(MoviesPage);
