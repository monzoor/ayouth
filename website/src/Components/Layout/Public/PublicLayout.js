import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

import Header from './Header';
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
                <Row>
                    <Col>
                        <Header />
                        <FadeInAnimation>
                            {children}
                        </FadeInAnimation>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AuthLayout;
