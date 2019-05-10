const urlBase = "http://localhost:3001";

const urlCustomers = `${urlBase}/customers`
export const getCustomers = () => fetch(urlCustomers).then(res => res.json())