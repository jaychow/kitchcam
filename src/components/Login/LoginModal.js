import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as authActions from 'redux/modules/auth';

const combine = require('classnames');
@connect(
    state => ({user: state.auth.user}),
    authActions)
export default class Login extends Component {
    static propTypes = {
        user: PropTypes.object,
        isVisible: PropTypes.bool,
        toggleLogin: PropTypes.func,
        activeTab: PropTypes.string
    };

    state = {
        activeTab: this.props.activeTab || 'login',
        hidePass: true
    };

    render() {
        const styles = require('./LoginModal.scss');
        console.log(this.props.activeTab);

        return (
            <div className={combine(styles.cdUserModal, this.props.isVisible ? styles.isVisible : null)}>
                <div className={styles.cdUserModalContainer}>
                    <ul className={styles.cdSwitcher}>
                        <li>
                            <a onClick={() => this.setState({activeTab: 'login'})}
                               className={this.state.activeTab === 'login' ? styles.selected : null}>
                                Sign in
                            </a>
                        </li>
                        <li>
                            <a onClick={() => this.setState({activeTab: 'join'})}
                               className={this.state.activeTab === 'join' ? styles.selected : null}>
                                New account
                            </a>
                        </li>
                    </ul>
                    <div id={styles.cdLogin} className={this.state.activeTab === 'login' ? styles.isSelected : null}>
                        <form className={styles.cdForm}>
                            <p className={styles.fieldset}>
                                <label className={combine(styles.imageReplace, styles.cdEmail)}
                                       htmlFor="signinEmail">E-mail
                                </label>
                                <input className={combine(styles.fullWidth, styles.hasPadding, styles.hasBorder)}
                                       id="signinEmail" type="email" placeholder="E-mail"/>
                                <span className={styles.cdErrorMessage}>Error message here!</span>
                            </p>
                            <p className={styles.fieldset}>
                                <label className={combine(styles.imageReplace, styles.cdPassword)}
                                       htmlFor="signinPassword">Password</label>
                                <input className={combine(styles.fullWidth, styles.hasPadding, styles.hasBorder)}
                                       id="signinPassword"
                                       type={this.state.hidePass ? 'password' : 'text'}
                                       placeholder="Password"/>
                                <a onClick={() =>this.setState({hidePass: !this.state.hidePass})}
                                   className={styles.hidePassword}>{this.state.hidePass ? 'Show' : 'Hide'}
                                </a>
                                <span className={styles.cdErrorMessage}>Error message here!</span>
                            </p>
                            <p className={styles.fieldset}>
                                <input type="checkbox" id="rememberMe" defaultChecked/>
                                <label htmlFor="rememberMe"> Remember me</label>
                            </p>

                            <p className={styles.fieldset}>
                                <input className={styles.fullWidth} type="submit" value="Login"/>
                            </p>
                        </form>
                        <p className={styles.cdFormBottomMessage}>
                            <a onClick={() => this.setState({activeTab: 'reset'})}>Forgot your password?</a>
                        </p>
                    </div>
                    <div id={styles.cdSignup} className={this.state.activeTab === 'join' ? styles.isSelected : null}>
                        <form className={styles.cdForm}>
                            <p className={styles.fieldset}>
                                <label className={combine(styles.imageReplace, styles.cdUsername)}
                                       htmlFor="signupUsername">Username</label>
                                <input className={combine(styles.fullWidth, styles.hasPadding, styles.hasBorder)}
                                       id="signupUsername"
                                       type="text" placeholder="Username"/>
                                <span className={styles.cdErrorMessage}>Error message here!</span>
                            </p>
                            <p className={styles.fieldset}>
                                <label className={combine(styles.imageReplace, styles.cdEmail)}
                                       htmlFor="signupEmail">
                                    E-mail
                                </label>
                                <input className={combine(styles.fullWidth, styles.hasPadding, styles.hasBorder)}
                                       id="signupEmail"
                                       type="email" placeholder="E-mail"/>
                                <span className={styles.cdErrorMessage}>Error message here!</span>
                            </p>
                            <p className={styles.fieldset}>
                                <label className={combine(styles.imageReplace, styles.cdPassword)}
                                       htmlFor="signupPassword">Password</label>
                                <input className={combine(styles.fullWidth, styles.hasPadding, styles.hasBorder)}
                                       id="signupPassword"
                                       type="text" placeholder="Password"/>
                                <a className={styles.hidePassword}>Hide</a>
                                <span className={styles.cdErrorMessage}>Error message here!</span>
                            </p>
                            <p className={styles.fieldset}>
                                <input type="checkbox" id="acceptTerms"/>
                                <label htmlFor="acceptTerms"> I agree to the <a href="#0">Terms</a></label>
                            </p>
                            <p className={styles.fieldset}>
                                <input className={combine(styles.fullWidth, styles.hasPadding)}
                                       type="submit" value="Create account"/>
                            </p>
                        </form>
                    </div>
                    <div id={styles.cdResetPassword}
                         className={this.state.activeTab === 'reset' ? styles.isSelected : null}>
                        <p className={styles.cdFormMessage}>
                            Lost your password? Please enter your email address.
                            You will receive a link to create a new password.
                        </p>
                        <form className={styles.cdForm}>
                            <p className={styles.fieldset}>
                                <label className={combine(styles.imageReplace, styles.cdEmail)}
                                       htmlFor="resetEmail">
                                    E-mail
                                </label>
                                <input className={combine(styles.fullWidth, styles.hasPadding, styles.hasBorder)}
                                       id="resetEmail" type="email" placeholder="E-mail"/>
                                <span className={styles.cdErrorMessage}>Error message here!</span>
                            </p>

                            <p className={styles.fieldset}>
                                <input className={combine(styles.fullWidth, styles.hasPadding)} type="submit"
                                       value="Reset password"/>
                            </p>
                        </form>
                        <p className={styles.cdFormBottomMessage}>
                            <a onClick={() => this.setState({activeTab: 'login'})}>
                                Back to log-in
                            </a>
                        </p>
                    </div>
                    <a onClick={this.props.toggleLogin} className={styles.cdCloseForm}>Close</a>
                </div>
            </div>
        );
    }
}
