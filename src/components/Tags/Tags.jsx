import React from 'react';
import cn from 'classnames';

import './Tags.sass';
import { connect } from 'react-redux';
import { updateTag } from '../../store/movieReducer';

const Tags = ({ tags, mix, updateTag }) => {

  const items = tags.map((item, idx) => {
    return (
      <li
        onClick={() => updateTag(item)}
        className="tags__item" key={idx}
      >
        {item}
      </li>
    )
  });

  return (
    <ul className={cn('tags', mix)}>
      {items}
    </ul>
  );
};

export default connect(null, { updateTag })(Tags);
