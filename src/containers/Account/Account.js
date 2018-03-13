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
                             height="300" data-toggle="tooltip" title="Patrick!" src={patrick}/>Patrick Impey
                    </h1>
                    <button className={`${styles.streamButton} ${styles.raise} btn btn-default`}>
                        <i className="fa fa-video-camera"/> Start Stream</button>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            userName: patrickus <a>Edit</a>
                        </div>
                        <div className="col-xs-12">
                            Bio: BLAH BLAH BLAH <a>Edit</a>
                        </div>
                        <div className="col-xs-12 ">
                            <img className={styles.spices}
                                 height="300" data-toggle="tooltip" title="Spices!" src={spices}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
