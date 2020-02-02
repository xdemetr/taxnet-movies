import React from 'react';
import cn from 'classnames'
import { setPageCurrent } from '../../store/movieReducer';
import { connect } from 'react-redux';
import { getPageCurrent, getPageSize, getPageTotal } from '../../store/selectors';

import './Paginator.sass';

const Paginator = ({ mix, current, total, pageSize, setPageCurrent }) => {
  const pagesCount = Math.ceil(total / pageSize);

  const handleClick = (page) => {
    setPageCurrent(page += 1);
  };

  if (pagesCount === current) return null;

  return (
    <div className={cn('paginator', mix)}>
      <button
        className="paginator__button"
        onClick={() => handleClick(current)}>Показать еще
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  total: getPageTotal(state),
  pageSize: getPageSize(state),
  current: getPageCurrent(state)
});

export default connect(mapStateToProps, { setPageCurrent })(Paginator);
