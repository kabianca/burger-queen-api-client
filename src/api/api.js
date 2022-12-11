export const setTokenRole = (token, role) => {
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
};

export const getToken = () => localStorage.getItem('token');
export const getRole = () => localStorage.getItem('role');

export const removeToken = () => localStorage.removeItem('token');

export const createUser = (name, email, password, role) => fetch('https://lab-api-bq.onrender.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    email,
    password,
    role,
    restaurant: 'Chapa Burger',
  }),
});

export const login = (email, password) => fetch('https://lab-api-bq.onrender.com/auth', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    email,
    password,
  }),
});

export const accessUsers = () => fetch('https://lab-api-bq.onrender.com/users', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken(),
  },
});

export const accessProducts = () => fetch('https://lab-api-bq.onrender.com/products', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken(),
  },
});

export const createOrder = (order) => fetch('https://lab-api-bq.onrender.com/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken(),
  },
  body: JSON.stringify({
    client: order.client,
    table: order.table,
    products: order.products,
  }),
});

export const accessOrders = () => fetch('https://lab-api-bq.onrender.com/orders', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken(),
  },
});

export const updateOrders = (orderId, status) => fetch(`https://lab-api-bq.onrender.com/orders/${orderId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    Authorization: getToken(),
  },
  body: JSON.stringify({ status }),
});
