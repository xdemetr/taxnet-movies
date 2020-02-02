import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import { updateTab } from '../../store/appReducer';
import { Link } from 'react-router-dom';

import './MainTabs.sass';

const MainTabs = ({ mix, currentTab, updateTab }) => {

  const tabs = [
    {
      id: 'all',
      label: 'Все фильмы'
    },
    {
      id: 'favorites',
      label: 'Закладки'
    }
  ];

  const updateCurrentTab = (tab) => {
    updateTab(tab);
  };

  const renderTabs = tabs.map(({ id, label }) => {
    return (
      <li key={id} className="main-tabs__item">
        <Link
          to={id} onClick={() => updateCurrentTab(id)}
          className={cn('main-tabs__link', currentTab === id && 'main-tabs__link_current')}>
          {label}
        </Link>
      </li>
    )
  });

  return (
    <ul className={cn('main-tabs', mix)}>
      {renderTabs}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  currentTab: state.app.currentTab
});

export default connect(mapStateToProps, { updateTab })(MainTabs);
