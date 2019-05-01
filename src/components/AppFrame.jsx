import React from 'react';
import PropTypes from 'prop-types';

// Components
import AppHeader from './AppHeader';

const AppFrame = ({header, body, footer}) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={header} />

                <div>{body}</div>
                <div>{footer}</div>
                <div>Simple App</div>
            </div>
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;