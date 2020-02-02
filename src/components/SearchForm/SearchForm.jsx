import React from 'react';
import { useFormik } from 'formik';
import { withRouter } from 'react-router-dom';

import './SearchForm.sass';

const SearchForm = ({ history }) => {

  const formik = useFormik({
    initialValues: {
      query: ''
    },
    onSubmit: values => {
      history.push(`/search/${values.query}`)
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <input
        id="query"
        name="query"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        className="form__field"
        placeholder="Поиск..."
      />
    </form>
  );
};

export default withRouter(SearchForm);
