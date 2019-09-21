import React from 'react';
import PropTypes from 'prop-types';
import CustomersActions from './CustomersActions';

const CustomerData = ({id, name, dni, age, onBack, isDeleteAllow, onDelete}) => {
    return (
        <div>
            <div className="customer-data">
                <h2>Datos del Cliente</h2>
                <div><strong>Nombre:</strong> <em>{name}</em></div>
                <div><strong>DNI:</strong> <em>{dni}</em></div>
                <div><strong>Edad:</strong> <em>{age}</em></div>

                <CustomersActions>
                    <button type="reset" onClick={onBack}>Atrás</button>
                    { isDeleteAllow && <button type="button" onClick={() => onDelete(id)}>Eliminar</button> }
                </CustomersActions>
            </div>
        </div>
    );
};

CustomerData.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
    isDeleteAllow: PropTypes.bool,
    onDelete: PropTypes.func,
};

export default CustomerData;