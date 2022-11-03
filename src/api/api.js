const TOKEN = "token";
export const setToken = (token) => localStorage.setItem(TOKEN, token);
export const getToken = () => localStorage.getItem(TOKEN);

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

export const importUsers = async () => {
  return await fetch('https://lab-api-bq.up.railway.com/users', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
        'Authorization': getToken() },
  })
}

export const accessProducts = async () => {
  return await fetch('https://lab-api-bq.onrender.com/products', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json',
        'Authorization': getToken() },
  })
}