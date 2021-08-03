import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Gun from "gun";
import Auth from "./pages/Auth";
import Feed from "./pages/Feed";
import NewPost from "./pages/NewPost";
import { GlobalContextProvider } from "./services/context";


function App() {
  const mnemonic = localStorage.getItem("mnemonic");
  const [loading, setLoading] = useState(true);
  // if (loading) return <h1>Loading fluidi...</h1>;

  return (
    <GlobalContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to={mnemonic ? "/feed" : "auth"} />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/feed">
            <Feed />
          </Route>
          <Route exact path="/new-post">
            <NewPost />
          </Route>
        </Switch>
      </Router>
    </GlobalContextProvider>
  );
}

export default App;
