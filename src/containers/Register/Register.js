import React, { Component } from 'react';

export default class Register extends Component {
    state = {
        chefName: 'Patrick'
    };

    render() {
        const styles = require('./Register.scss');

        return (
            <div className={styles.register}>
                <div className="container">
                    <div className="row bottom-space">
                        <div className="col-xs-12">
                            <div className={styles.menuRegister}>
                                <div className={styles.registerContent}>
                                    <h1>Register for KitchCam</h1>
                                    <form>
                                        <label htmlFor="email"><b>Email</b></label>
                                        <input className={styles.registerInput}
                                               type="text" placeholder="Enter Email" name="email" required/>
                                        <label htmlFor="psw"><b>Password</b></label>
                                        <input className={styles.registerInput}
                                               type="password" placeholder="Enter Password" name="psw"
                                               required/>
                                        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                                        <input className={styles.registerInput}
                                               type="password" placeholder="Repeat Password"
                                               name="psw-repeat" required/>
                                        <p>
                                            By creating an account you agree to our <a href="#">Terms & Privacy</a>.
                                        </p>
                                        <div className="clearfix">
                                            <button type="button" className="cancelbtn">
                                                Cancel
                                            </button>
                                            <button type="submit" className="signupbtn">
                                                Sign Up
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
