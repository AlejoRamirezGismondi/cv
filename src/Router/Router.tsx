import {Route, Switch, BrowserRouter} from 'react-router-dom';
import React from 'react';
import Resume from "../Resume/Resume";

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={Resume}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;
