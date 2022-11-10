export const setTokenRole = (token, role) => {
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
}

export const getToken = () => localStorage.getItem('token');
export const getRole = () => localStorage.getItem('role');

// Logout
export const removeToken = () => localStorage.removeItem('token');

export const createUser = (name, email, password, role) => {
  return fetch('https://lab-api-bq.onrender.com/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    },
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
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
};

export const accessUsers = async () => {
  return await fetch('https://lab-api-bq.onrender.com/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken(),
      },
  })
}

export const accessProducts = async () => {
  return await fetch('https://lab-api-bq.onrender.com/products', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': getToken(),
      },
  })
}

export const createOrder = (client, table, products) => {
  return fetch('https://lab-api-bq.onrender.com/orders', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
    body: JSON.stringify({
      client: client,
      table: table,
      products: products,
    }),
  });
};
