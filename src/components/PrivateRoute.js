
import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Profile, ...rest }) => (
    <Route {...rest} render={(props) => (
        <Profile {...props} />
    )} />
  );


export default PrivateRoute;
