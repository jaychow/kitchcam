import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
import classNames from 'classnames';

import { LoginModal } from 'components';

@asyncConnect([{
    promise: ({store: {dispatch, getState}}) => {
        const promises = [];

        if (!isInfoLoaded(getState())) {
            promises.push(dispatch(loadInfo()));
        }
        if (!isAuthLoaded(getState())) {
            promises.push(dispatch(loadAuth()));
        }

        return Promise.all(promises);
    }
}])
@connect(
    state => ({user: state.auth.user}),
    {logout, pushState: push})
export default class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired,
        user: PropTypes.object,
        logout: PropTypes.func.isRequired,
        pushState: PropTypes.func.isRequired
    };

    static contextTypes = {
        store: PropTypes.object.isRequired
    };

    state = {
        showLogin: false
    };

    componentWillReceiveProps(nextProps) {
        if (!this.props.user && nextProps.user) {
            // login
            this.props.pushState('/loginSuccess');
        } else if (this.props.user && !nextProps.user) {
            // logout
            this.props.pushState('/');
        }
    }

    handleLogout = (event) => {
        event.preventDefault();
        this.props.logout();
    };

    toggleLogin = (type = 'login') => {
        console.log('hereeeee: ');
        console.log(type);
        console.log('poop');
        this.setState({
            showLogin: !this.state.showLogin,
            activeTab: type
        });
    };

    render() {
        const {user} = this.props;
        const styles = require('./App.scss');
        console.log(this.state.activeTab);

        return (
            <div className={styles.app}>
                <Helmet {...config.app.head}/>
                <Navbar fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <IndexLink to="/">
                                <div className={styles.brand}/>
                            </IndexLink>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>

                    <Navbar.Collapse eventKey={0}>
                        <Nav navbar>
                            <LinkContainer to="/live">
                                <NavItem eventKey={1}>
                                    <i className={styles.liveIcon + ' fa fa-circle danger'}/> Live
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/kitchens">
                                <NavItem eventKey={1}>Kitchens</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/account">
                                <NavItem eventKey={3}>Account</NavItem>
                            </LinkContainer>
                        </Nav>
                        {user &&
                        <p className={styles.loggedInMessage + ' navbar-text'}>Logged in as
                            <strong>{user.name}</strong>.
                        </p>}
                        {user &&
                        <LinkContainer to="/logout">
                            <NavItem eventKey={7} className="logout-link" onClick={this.handleLogout}>
                                Logout
                            </NavItem>
                        </LinkContainer>}
                        {!user && <Nav navbar pullRight>
                            <NavItem eventKey={8} onClick={this.toggleLogin}
                                     className={classNames(styles.loginBtn, styles.navBtn)}>
                                Log in
                            </NavItem>
                            <NavItem eventKey={9} onClick={this.toggleLogin.bind(this, 'join')}
                                     className={classNames(styles.joinBtn, styles.navBtn)}>
                                Register
                            </NavItem>
                        </Nav>}
                    </Navbar.Collapse>
                </Navbar>
                <LoginModal isVisible={this.state.showLogin}
                            toggleLogin={this.toggleLogin.bind(this)}
                            activeTab={this.state.activeTab || 'login'}/>
                <div className={styles.appContent}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
