import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const {username} = useParams();//useParams is a hook provided by react-router-dom that allows you to access the parameters of the current route.
  return <div> I am {username}</div>;
};

export default User;
