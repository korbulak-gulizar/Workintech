import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>

        <div className="loginFormHeaderButtonDiv">
          {!isLoggedIn && (
            <Link to="/">
              <button>LOGIN</button>
            </Link>
          )}

          {isLoggedIn && (
            <>
              <Link to="/friends">
                <button>FRIENDS LIST</button>
              </Link>

              <Link to="/friend/add">
                <button>ADD FRIEND</button>
              </Link>

              <button onClick={logout}>LOGOUT</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
