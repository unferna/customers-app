import React from 'react';
import PropTypes from 'prop-types';

// Components
import CustomerListItem from './CustomerListItem';

const CustomerList = ({ customers, urlPath }) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map(customer => {
                        return <CustomerListItem 
                            key={customer.dni}
                            dni={customer.dni}
                            name={customer.name}
                            editAction="Editar"
                            delAction="Eliminar"
                            urlPath={urlPath}
                        />
                    })
                }
            </div>
        </div>
    );
};

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPath: PropTypes.string.isRequired,
};

export default CustomerList;