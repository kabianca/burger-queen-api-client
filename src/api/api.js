export const createUser = (name, email, password, role) => {
  return fetch('https://lab-api-bq.onrender.com/users', {
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
  return fetch('https://lab-api-bq.onrender.com/auth', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};


// https://lab-api-bq.up.railway.app