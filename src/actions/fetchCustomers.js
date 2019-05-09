import { createAction } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

const url = "http://localhost:3001/customers";
const apiFetchCustomers = () => fetch(url).then(res => res.json())

export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiFetchCustomers);