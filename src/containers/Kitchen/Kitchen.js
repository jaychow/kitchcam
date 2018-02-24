import React, { Component } from 'react';

export default class Kitchen extends Component {
    state = {
        chefName: 'Patrick'
    };

    render() {
        const styles = require('./Kitchen.scss');

        return (
            <div className={styles.register}>
                <div className="container">
                    <div className="row bottom-space">
                        <div className="col-xs-12">
                            <div className={styles.menuRegister}>
                                <div className={styles.registerContent}>
                                    <h1>Welcome to {this.state.chefName}'s kitchen</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
