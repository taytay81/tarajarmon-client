import React, { useContext } from "react";
import UserContext from "../Views/auth/UserContext";

export default function WithUser({ component: Component, ...rest }) {
  const userContext = useContext(UserContext);
  const { currentUser, setCurrent } = userContext;
  return <Component {...rest} user={currentUser}></Component>;
}
