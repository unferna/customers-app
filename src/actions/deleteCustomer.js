import { createAction } from 'redux-actions';
import { DELETE_CUSTOMER } from '../constants';

import { delCustomer } from '../api';

export const deleteCustomer = createAction(DELETE_CUSTOMER, id => delCustomer(id));