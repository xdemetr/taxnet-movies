import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import './BackButton.sass';

const BackButton = ({ handleClick, content, href, ...props }) => {
  const Tag = href ? Link : 'button';

  const onClick = () => {
    if (!handleClick) return null;
    return handleClick();
  };

  return (
    <Tag
      to={href}
      className={cn('back-button', content && `back-button_content_${content}`)}
      onClick={onClick}
    >
      {props.children}
    </Tag>
  );
};

export default BackButton;
