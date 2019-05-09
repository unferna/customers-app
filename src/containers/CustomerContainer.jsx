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
import CustomerActions from '../components/CustomerActions';

class CustomerContainer extends Component {
    componentDidMount() {
        this.props.fetchCustomers();
    }

    handleAddNew = () => {
        this.props.history.push("/customers/new");
    }

    renderBody = customers => (
        <div>
            <CustomersList customers={customers} urlPath="customers/" />
            <CustomerActions>
                <button onClick={this.handleAddNew}>Nuevo Cliente</button>
            </CustomerActions>
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

CustomerContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomerContainer.defaultProps = {
    customers: []
};

const mapStateToProps = state => ({
    customers: getCustomers(state)
});

const mapDispatchToProps = dispatch => ({
    fetchCustomers: () => dispatch( fetchCustomers() )
});

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(CustomerContainer) );