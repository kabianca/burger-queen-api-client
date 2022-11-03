import { useEffect } from "react";
import { importUsers } from "../../api/api";
// import User from "../user/user";
// import { createUser } from "../../api/api";

function Users() {
    useEffect(() => {
        importUsers()
          .then((answer) => answer.json())
          .then((data) => {
            let users = data;

            users.map((user) => {
                return (
                    <div>
                        <h6>${user.name}</h6>
                        <p>${user.email}</p>
                        <p>${user.role}</p>
                        <p>${user.restaurant}</p>
                    </div>
                )
            })
      });
    });
}

export default Users;