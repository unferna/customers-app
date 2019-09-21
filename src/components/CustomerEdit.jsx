import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Prompt } from 'react-router-dom';
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

const toNumber = value => value && Number(value);

class CustomerEdit extends Component {
    componentDidMount() {
        if( this.textToFocus ) {
            this.textToFocus.focus();
        }
    }

    renderField = ({ label, name, input, meta, type, withFocus }) => (
        <div>
            <label htmlFor={name}>{label}: </label>
            <input 
                type={type || "text"} 
                { ...input } 
                ref={ withFocus && (textToFocus => this.textToFocus = textToFocus) }
            />
            {
                meta.touched && meta.error && <span>{ meta.error }</span>
            }
        </div>
        
    );
    
    render() {
        const { handleSubmit, onBack, pristine, submitSucceeded, submitting } = this.props;

        return (
            <div>
                <h2>Edición del Cliente</h2>
                <form onSubmit={handleSubmit}>
                    <Field 
                        label="DNI" 
                        name="dni" 
                        component={ this.renderField } 
                        withFocus // Properties without values always are initialized as true
                    />
                    <Field
                        label="Nombre" 
                        name="name" 
                        component={ this.renderField } 
                    />
                    <Field 
                        label="Edad" 
                        name="age" 
                        component={ this.renderField } 
                        type="number" 
                        validate={ isNumber } 
                        parse={ toNumber }
                    />
                    <CustomersActions>
                        <button type="button" disabled={ submitting } onClick={onBack}>Cancelar</button>
                        <button type="submit" disabled={ pristine || submitting }>Aceptar</button>
                    </CustomersActions>
                    <Prompt 
                        when={ !pristine && !submitSucceeded }
                        message="Se perderán los datos..."
                    />
                </form>
            </div>
        );
    }
}

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func.isRequired,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit', validate })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);