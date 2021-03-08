import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const CssSplit = lazy(() => import("./css-split"));
const CssModule = lazy(() => import("./css-module"));
const PreBundle = lazy(() => import("./pre-bundle"));

function App() {
  return (
    <Suspense fallback="loading">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/css-module">Css Module</Link>
              </li>
              <li>
                <Link to="/css-split">Css Split</Link>
              </li>
              <li>
                <Link to="/pre-bundle">Pre-Bundle</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/css-module">
              <CssModule />
            </Route>
            <Route path="/css-split">
              <CssSplit></CssSplit>
            </Route>
            <Route path="/pre-bundle">
              <PreBundle></PreBundle>
            </Route>
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
