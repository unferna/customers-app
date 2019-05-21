import { createAction } from 'redux-actions';
import { UPDATE_CUSTOMERS } from '../constants';

import { putCustomer } from '../api';
export const updateCustomer = createAction(UPDATE_CUSTOMERS, (id, customer) => putCustomer(id, customer));