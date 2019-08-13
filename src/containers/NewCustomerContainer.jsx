import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { SubmissionError } from 'redux-form';

// Components
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';

// Actions
import { insertCustomer } from '../actions/insertCustomer';

class NewCustomerContainer extends Component {
    handleSubmit = values => {
        return this.props.insertCustomer(values).catch(payload => {
            if(payload) throw new SubmissionError(payload);
        });
    }

    handleSubmitSuccess = () => {
        this.props.history.goBack();
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderBody = () => {
        return <CustomerEdit 
            onSubmit={this.handleSubmit} 
            onSubmitSuccess={this.handleSubmitSuccess} 
            onBack={this.handleOnBack} 
        />
    }

    render() {
        return (
            <div>
                <AppFrame
                    header="Nuevo Cliente"
                    body={ this.renderBody() }
                />                
            </div>
        )
    }
}

NewCustomerContainer.propTypes = {
    insertCustomer: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    insertCustomer: customer => dispatch(insertCustomer(customer)),
});

const componentConnected = connect(null, mapDispatchToProps) (NewCustomerContainer);
export default withRouter( componentConnected );