import { createContext } from "react";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authData, setAuthData] = useLocalStorage("s11d2", {
    isLoggedIn: false,
    token: null,
    user: null,
  });

  const login = (formData) => {
    return axios
      .post("https://nextgen-project.onrender.com/api/s11d2/login", formData)
      .then((res) => {
        const newData = {
          isLoggedIn: true,
          token: res.data.token,
          user: res.data.user,
        };

        setAuthData(newData);
        return res.data;
      })
      .catch((err) => {
        console.log("LOGIN ERROR:", err);
        throw err;
      });
  };

  const logout = () => {
    setAuthData({
      isLoggedIn: false,
      token: null,
      user: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: authData.isLoggedIn,
        token: authData.token,
        authUserInfo: authData.user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
