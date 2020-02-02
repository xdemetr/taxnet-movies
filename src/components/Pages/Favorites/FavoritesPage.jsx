import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import MainTabs from '../../MainTabs/MainTabs';
import MovieList from '../../MovieList';
import { getFavorites } from '../../../store/movieReducer';
import Alert from '../../Alert';
import { Link } from 'react-router-dom';

const FavoritesPage = ({ favorites, getFavorites, items }) => {

  useEffect(() => {
    getFavorites(favorites)
  }, [getFavorites, favorites]);

  if (!favorites.length) return (
    <Alert>
      <p>В закладках ничего нет.</p>
      <p>Вернитесь на <Link to={'/'}>главную</Link>.</p>
    </Alert>
  );

  return (
    <div className="favorites-page">
      <MainTabs mix="app__page-header"/>
      <MovieList items={items}/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.app.favorites,
  items: state.movies.favorites,
});

export default connect(mapStateToProps, { getFavorites })(FavoritesPage);
