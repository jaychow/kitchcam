import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';
// import config from '../../config';

export default class Account extends Component {
    render() {
        const styles = require('./Account.scss');
        const spices = require('./spices.jpg');
        const patrick = require('./patrick.jpg');

        return (
            <div className={styles.account + ' container-fluid'}>
                <Helmet title="Account Page"/>
                <div className="col-xs-12">
                    <h1 className={styles.accountHeader}>
                        <img className={styles.accountPhoto}
                             height="300" data-toggle="tooltip" title="Spices!" src={patrick}/>Account
                    </h1>
                    <button className={`${styles.streamButton} ${styles.raise} btn btn-default`}>
                        <i className="fa fa-video-camera"/> Start Stream</button>
                </div>
                <div className="row">
                    <div className="col-xs-4">
                        1 of 3
                    </div>
                    <div className="col-xs-4">
                        2 of 3 (wider)
                    </div>
                    <div className="col-xs-4">
                        <img className={styles.spices}
                             height="300" data-toggle="tooltip" title="Spices!" src={spices}/>
                    </div>
                </div>
            </div>
        );
    }
}
