import React from 'react';
import cn from 'classnames';

import './Alert.sass';

const Alert = ({ type = 'warning', ...props }) => {
  if (!props.children) return null;

  return (
    <div className={cn('alert', type && `alert_type_${type}`)}>
      {props.children}
    </div>
  );
};

export default Alert;
