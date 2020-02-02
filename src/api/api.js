import data from './films.json';

export const movieAPI = {
  getMovies() {
    return new Promise((resolve, reject) => {
      resolve(data);
      // if (Math.random() < 0.75) {
      //   resolve(data);
      // } else {
      //   reject('Ошибка. Попробуйте перезагрузить страницу');
      // }
    });
  },
  getMovieById(id) {
    return new Promise((resolve, reject) => {
      if (Math.random() < 0.75) {
        const movie = data.filter(m => m.id === id);
        resolve(movie[0]);
      } else {
        reject('Ошибка. Попробуйте перезагрузить страницу');
      }
    });
  },
  getFavorites(favorites) {
    return new Promise((resolve, reject) => {
      const filtered = data.filter(
        function (movie) {
          return this.indexOf(movie.id) >= 0;
        },
        favorites
      );
      resolve(filtered);
    });
  },
  getMovieByTitle(query) {
    return new Promise((resolve, reject) => {
      if (!query) {
        reject('Введите поисковый запрос.');
      }

      const filtered = data.filter(item => {
        return item.title
          .toLowerCase()
          .indexOf(query.toLowerCase()) > -1
      });

      if (filtered.length > 0) {
        resolve(filtered);
      } else {
        reject('Ничего не найдено.')
      }

    });
  }
};
