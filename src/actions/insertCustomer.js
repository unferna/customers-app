import { createAction } from 'redux-actions';
import { INSERT_CUSTOMER } from '../constants';

import { postCustomer } from '../api';
export const insertCustomer = createAction(INSERT_CUSTOMER, customer => postCustomer(customer));