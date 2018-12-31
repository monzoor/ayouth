import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FadeInAnimation } from '../../../Utils/DesignUtils';


class AuthLayout extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
        ]).isRequired,
    };

    render() {
        const { children } = this.props;

        return (
            <div className="container-fluid">
                <FadeInAnimation>
                    {children}
                </FadeInAnimation>
            </div>
        );
    }
}

export default AuthLayout;
