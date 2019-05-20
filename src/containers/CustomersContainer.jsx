import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Actions
import { fetchCustomers } from '../actions/fetchCustomers';

// Selectors
import { getCustomers } from '../selectors/customers';

// Components
import AppFrame from '../components/AppFrame';
import CustomersList from '../components/CustomerList';
import CustomersActions from '../components/CustomersActions';

class CustomersContainer extends Component {
    componentDidMount() {
        this.props.fetchCustomers();
    }

    handleAddNew = () => {
        this.props.history.push("/customers/new");
    }

    renderBody = customers => (
        <div>
            <CustomersList customers={customers} urlPath="customers/" />
            <CustomersActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomersActions>
        </div>
    )

    render() {
        return (
            <div>
                <AppFrame
                    header="Listado de Clientes"
                    body={this.renderBody(this.props.customers)}
                />
            </div>
        );
    }
}

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers: []
};

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

const mapDispatchToProps = dispatch => ({
    fetchCustomers: () => dispatch( fetchCustomers() )
});

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(CustomersContainer) );