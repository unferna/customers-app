const urlBase = "http://localhost:3001";

const urlCustomers = `${urlBase}/customers`;
export const getCustomers = () => fetch(urlCustomers).then(res => res.json());

export const putCustomer = (id, customer) => fetch(`${urlCustomers}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(customer),
    headers: new Headers({
        'Content-type': 'application/json'
    })
}).then(res => res.json());