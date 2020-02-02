import React from 'react';
import SearchForm from '../SearchForm';
import TagsSelected from '../TagsSelected/TagsSelected';

const AppHeader = () => {
  return (
    <header className="app-header app__header">
      <SearchForm/>
      <TagsSelected/>
    </header>
  );
};

export default AppHeader;
