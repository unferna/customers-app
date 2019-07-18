import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

// Components
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';

// Selectors
import { getCustomerByDni } from '../selectors/customers';

// Actions
import { fetchCustomers } from '../actions/fetchCustomers';
import { updateCustomer } from '../actions/updateCustomer';

class CustomerContainer extends Component {

    componentDidMount() {
        if( !this.props.customer ) {
            this.props.fetchCustomers();
        }
    }

    handleSubmit = values => {
        const { id } = values;
        return this.props.updateCustomer(id, values);
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    handleOnSubmitSuccess = () => {
        this.handleOnBack();
    }

    renderBody = () => (
        <Route 
            path="/customers/:dni/edit"
            children={
                ({ match }) => { 
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl 
                        { ...this.props.customer } 
                        onSubmit={this.handleSubmit} 
                        onSubmitSuccess={this.handleOnSubmitSuccess}
                        onBack={this.handleOnBack} 
                        />  // Spread parameters
                }
            }
        />
    )

    render() {
        return (
            <div>
                <AppFrame 
                    header={`Cliente: ${this.props.dni}`}
                    body={this.renderBody()}
                />
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props),
});

const mapDispatchToProps = dispatch => ({
    fetchCustomers: () => dispatch(fetchCustomers()),
    updateCustomer: (id, customer) => dispatch(updateCustomer(id, customer))
});

export default withRouter( connect(mapStateToProps, mapDispatchToProps) (CustomerContainer) );