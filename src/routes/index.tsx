import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ShoppingCart from '../pages/ShoppingCart';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={ShoppingCart} />
    </Switch>
  );
};

export default Routes;
