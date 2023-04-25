import React from "react";
import NotificationContext from "../components/store";
import { Link } from "react-router-dom";

const Users = () => {
  // const [users, setUsers] = React.useState([]);
  let users = React.useContext(NotificationContext).users;
  console.log(users);
  return (
    <>
      <p>users compnonet</p>
      <div>
        {users.map((user,i) => (
            <div key={i}>
              <Link to={`/users/${user.id}`}>{user.id}</Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Users;
