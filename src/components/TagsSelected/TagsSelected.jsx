import React from 'react';
import { connect } from 'react-redux';
import { getSelectedTags } from '../../store/selectors';
import { updateTag } from '../../store/movieReducer';

import './TagsSelected.sass';

const TagsSelected = ({ tags, updateTag }) => {

  if (!tags) return null;

  const items = tags.map((item, idx) => {
    return (
      <li
        key={idx}
        className="tags-selected__item"
      >
        <span className="tags-selected__text">{item}</span>
        <button onClick={() => updateTag(item)} className="tags-selected__remove"></button>
      </li>
    )
  });

  return (
    <ul className="tags-selected">
      {items}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  tags: getSelectedTags(state)
});

export default connect(mapStateToProps, { updateTag })(TagsSelected);
