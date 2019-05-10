import { createAction } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

import { getCustomers } from '../api';

export const fetchCustomers = createAction(FETCH_CUSTOMERS, getCustomers);