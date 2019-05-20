import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

import CustomersActions from './CustomersActions';

const validate = values => {
    const error = {};

    if(!values.dni) {
        error.dni = "El campo DNI es requerido!";

    } 
    
    if(!values.name) {
        error.name = "El campo nombre es requerido!";
    }

    return error;
};

const isNumber = value => (
    isNaN(Number(value)) && "Este campo debe ser numerico!"
);

const MyField = ({ label, name, input, meta, type }) => (
    <div>
        <label htmlFor={name}>{label}: </label>
        <input { ...input } type={type || "text"} />
        {
            meta.touched && meta.error && <span>{ meta.error }</span>
        }
    </div>
);

const CustomerEdit = ({ handleSubmit, submitting, onBack }) => {
    return (
        <div>
            <h2>Edición del Cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field label="DNI" name="dni" component={MyField} />
                <Field label="Nombre" name="name" component={MyField} />
                <Field label="Edad" name="age" component={MyField} type="number" validate={ isNumber } />
                <CustomersActions>
                    <button type="reset" onClick={onBack}>Cancelar</button>
                    <button type="submit" disabled={submitting}>Aceptar</button>
                </CustomersActions>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit', validate })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);