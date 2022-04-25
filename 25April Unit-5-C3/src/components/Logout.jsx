import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const Logout = () => {
  // log user out. it's just an inmemory value in context api
  const { isAuth, handleAuth } = useContext(AuthContext);

  handleAuth(false);
  return <div></div>;
};