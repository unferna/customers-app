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

const MyField = ({ label, name, input, meta, type }) => (
    <div>
        <label htmlFor={name}>{label}: </label>
        <input { ...input } type={type || "text"} />
        {
            meta.touched && meta.error && <span>{ meta.error }</span>
        }
    </div>
);

const toNumber = value => value && Number(value);
const toUpper = value => value && value.toUpperCase();
const toLower = value => value && value.toLowerCase();

class CustomerEdit extends Component {
    componentDidMount() {
        if( this.textBox ) this.textBox.focus();
    }
    
    render() {
        const { handleSubmit, onBack, pristine, submitSucceeded, submitting } = this.props;

        return (
            <div>
                <h2>Edición del Cliente</h2>
                Text Focus: <input type="text" ref={ textBox => this.textBox = textBox } />
                <form onSubmit={handleSubmit}>
                    <Field label="DNI" name="dni" component={MyField} />
                    <Field label="Nombre" name="name" component={MyField} parse={ toUpper } format={ toLower }  />
                    <Field label="Edad" name="age" component={MyField} type="number" validate={ isNumber } parse={ toNumber }/>
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