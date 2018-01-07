import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';
// import config from '../../config';

export default class Account extends Component {
    render() {
        const styles = require('./Account.scss');

        return (
            <div className={styles.home + ' container-fluid'}>
                <Helmet title="Account Page"/>
                <div className="col-xs-12">
                    <h1>Account</h1><button className="btn btn-default">Start Stream</button>
                </div>
                <div className="row">
                    <div className="col-xs-4">
                        1 of 3
                    </div>
                    <div className="col-xs-4">
                        2 of 3 (wider)
                    </div>
                    <div className="col-xs-4">
                        3 of 3
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-4">
                        1 of 3
                    </div>
                    <div className="col-xs-4">
                        2 of 3 (wider)
                    </div>
                    <div className="col-xs-4">
                        3 of 3
                    </div>
                </div>
            </div>
        );
    }
}
