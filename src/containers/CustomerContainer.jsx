import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// Components
import AppFrame from '../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';

// Selectors
import { getCustomerByDni } from '../selectors/customers';

class CustomerContainer extends Component {
    renderBody = () => (
        <Route 
            path="/customers/:dni/edit"
            children={
                ({ match }) => { 
                    const CustomerControl = match ? CustomerEdit : CustomerData;
                    return <CustomerControl { ...this.props.customer } />  // Spread parameters
                }
            }
        />
    )

    // <p>Datos del cliente {this.props.customer.name}</p>

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
    customer: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
    customer: getCustomerByDni(state, props),
});

export default connect(mapStateToProps, null) (CustomerContainer);