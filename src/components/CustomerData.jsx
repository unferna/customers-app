import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({name, dni, age, onBack}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del Cliente</h2>
                <div><strong>Nombre:</strong> <em>{name}</em></div>
                <div><strong>DNI:</strong> <em>{dni}</em></div>
                <div><strong>Edad:</strong> <em>{age}</em></div>

                <CustomersActions>
                    <button type="reset" onClick={onBack}>Atrás</button>
                </CustomersActions>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

export default CustomerData;