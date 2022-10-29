// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext({});

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const userToken = localStorage.getItem("user_token");
//     const userStorage = localStorage.getItem("users_db");

//     if (userToken && userStorage) {
//       const hasUser = JSON.parse(userStorage)?.filter(
//         (user) => user.email === JSON.parse(userToken).email
//       );

//       if (hasUser) setUser(hasUser[0]);
//     }
//   }, []);
// }

export const createUser = (name, email, password, role) => {
  return fetch('https://lab-api-bq.up.railway.app/users', {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: "Chapa Burger",
    }),
  });
};

export const login = (email, password) => {
  return fetch('https://lab-api-bq.up.railway.app/auth', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};
