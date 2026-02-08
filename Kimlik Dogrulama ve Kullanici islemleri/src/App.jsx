import React from "react";
import "./index.css";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />

          <Switch>
            <PrivateRoute exact path="/friends" component={FriendsList} />

            <PrivateRoute path="/friend/add" component={AddFriend} />

            <Route exact path="/">
              <LoginForm />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
