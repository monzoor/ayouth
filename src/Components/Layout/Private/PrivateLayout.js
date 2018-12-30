
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FadeInAnimation } from '../../../Utils/DesignUtils';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import Footer from './Footer';

class DashboardLayout extends Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.arrayOf(PropTypes.node),
        ]).isRequired,
    };

    render() {
        const { children, users } = this.props;
        console.log(users);
        return (
            <div className="minvh-100">
                <FadeInAnimation>
                    {children}
                </FadeInAnimation>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.auth.users,
});
export default connect(mapStateToProps)(DashboardLayout);
// const mapStateToProps = state => ({
//     errors: state.errors,
// });

// export const LoginForm = Form.create()(Login);

// export default withRouter(connect(mapStateToProps)(LoginForm));
