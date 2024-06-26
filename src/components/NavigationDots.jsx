/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'services', 'lectures', 'mentorship', 'contact'].map(
      (item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { background: 'var(--gradient)' } : {}}
        />
      )
    )}
  </div>
);

export default NavigationDots;
