import React from "react";
import { useParams } from "react-router-dom";
import NotificationContext from "../components/store";

const UserDetail = () => {
  const routeParams = useParams();
  const ctx = React.useContext(NotificationContext);
  console.log(routeParams.userId);
  if (ctx.users.filter((u) => u.id === routeParams.userId)) {
    return (
      <>
        {" "}
        <div>user found</div>
        <div>{routeParams.userId}</div>
      </>
    );
  }
  // return (
  //   // <div>{ctx.users.filter(i=>parseInt(i.id)===+routeParams.userId)}</div>
  // )
};

export default UserDetail;
