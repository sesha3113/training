import React from "react";
import { Switch, Route } from "react-router-dom";
import Helloworld from "../Pages/helloworld/helloworld";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Helloworld} />
    </Switch>
  );
}
