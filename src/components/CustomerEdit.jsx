import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isRequired = value => {
    const res = "Este campo es requerido!"; 
    
    if(value === undefined) {
        return res;

    } else if( !value.trim() ) {
        return res;
        
    } else {
        return false;
    }
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

const CustomerEdit = ({ name, dni, age }) => {
    return (
        <div>
            <h2>Edición del Cliente</h2>
            <form action="">
                <Field label="DNI" name="dni" component={MyField} validate={[isNumber, isRequired]} />
                <Field label="Nombre" name="name" component={MyField} validate={ isRequired } />
                <Field label="Edad" name="age" component={MyField} type="number" validate={ isNumber } />
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit' })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);