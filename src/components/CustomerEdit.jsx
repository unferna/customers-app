import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isRequired = value => {
    const res = "Este campo es requerido"; 
    
    if(value === undefined) {
        return res;

    } else if( !value.trim() ) {
        return res;
        
    } else {
        return false;
    }
};

const MyField = ({ input, meta }) => (
    <div>
        <input { ...input } />
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
                <div>
                    <label htmlFor="dni">DNI: </label>
                    <Field name="dni" component={MyField} type="text" validate={isRequired} />
                </div>
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <Field name="name" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="age">Edad: </label>
                    <Field name="age" component="input" type="number" />
                </div>
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