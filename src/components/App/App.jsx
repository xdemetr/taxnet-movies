import React from 'react';
import './App.sass';
import AppHeader from '../AppHeader';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FavoritesPage, MoviePage, MoviesPage, SearchPage } from '../Pages';

const App = () => {
  return (
    <div className="app">

      <AppHeader/>

      <main className="app__body">
        <Switch>
          <Route path="/all" exact component={MoviesPage}/>
          <Route path="/favorites" exact component={FavoritesPage}/>
          <Route path={`/movie/:id?`} component={MoviePage}/>
          <Route path={`/search/:query?`} component={SearchPage}/>

          <Redirect from={"/"} to={"/all"}/>
        </Switch>
      </main>
    </div>
  );
};

export default App;
