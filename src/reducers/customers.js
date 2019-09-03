import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMERS } from '../constants';

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload ],
    [INSERT_CUSTOMER]: (state, action) => [ ...state, action.payload ],
    [UPDATE_CUSTOMERS]: (state, action) => {
        const customerPayload = action.payload
        const { id } = customerPayload;

        const customers = state;
        const initalValue = [];

        const newCustomers = customers.reduce((acc, customer) => {
            if( customer.id === id ) {
                return [ ...acc, customerPayload ]
            }

            return [ ...acc, customer ]
        }, initalValue);

        return newCustomers;
    }
}, []);