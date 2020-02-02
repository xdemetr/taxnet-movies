import React from 'react';
import cn from 'classnames';
import { updateFavorite } from '../../store/appReducer';
import { connect } from 'react-redux';

import './FavoriteButton.sass';

const FavoriteButton = ({ favorites, id, updateFavorite, view = 'compact' }) => {
  const selected = favorites.filter(f => f === id).length;

  const btnText = selected ? 'Удалить с закладок' : 'Добавить в закладки';

  const handleBtn = (id) => {
    updateFavorite(id);
  };

  return (
    <button
      onClick={() => handleBtn(id)}
      className={cn(
        'favorite-button',
        selected && 'favorite-button_selected',
        view === 'full' && 'favorite-button_full'
      )}
      title={btnText}
    >
      {btnText}
    </button>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.app.favorites
});


export default connect(mapStateToProps, { updateFavorite })(FavoriteButton);
