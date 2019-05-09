import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Components
import AppFrame from '../components/AppFrame';
import CustomerActions from '../components/CustomerActions';

class HomeContainer extends Component {
    handleOnClick = () => {
        console.log("Handle On Click");
        this.props.history.push('/customers');
    }
    render() {
        return (
            <div>
                <AppFrame
                    header="Home"
                    body={
                        <div>
                            Esta es la Pantalla Inicial
                            <CustomerActions>
                                <button onClick={this.handleOnClick}>Listado de Clientes</button>
                            </CustomerActions>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default withRouter(HomeContainer);