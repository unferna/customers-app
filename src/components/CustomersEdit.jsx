import React from 'react';
import PropTypes from 'prop-types';

const CustomersEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h2>Edición del Cliente</h2>
            <h3>{name} / {dni} / {age}</h3>
        </div>
    );
};

CustomersEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

export default CustomersEdit;