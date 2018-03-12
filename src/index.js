import React from 'react';
import ReactDOM from 'react-dom';

import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

ReactDOM.render(
  <div>
    <CoordinatesButton />
    <DelayedButton />
  </div>,
  document.getElementById('global')
);
