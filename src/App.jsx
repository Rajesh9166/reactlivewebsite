import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Menu from "./Menu";
import Search from "./Search";

const App = () => {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/search" component={Search} />
      </Switch>
      {/* <About />
      <Contact /> */}
    </>
  );
};
export default App;
