import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// Components
import AppFrame from '../components/AppFrame';
import CustomersActions from '../components/CustomersActions';

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
                            <CustomersActions>
                                <button onClick={this.handleOnClick}>Listado de Clientes</button>
                            </CustomersActions>
                        </div>
                    }
                />
            </div>
        );
    }
}

export default withRouter(HomeContainer);