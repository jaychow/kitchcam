import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';
// import config from '../../config';

export default class Stream extends Component {
    render() {
        const styles = require('./Stream.scss');

        return (
            <div className={styles.home + ' container-fluid'}>
                <div className="row"><div className={styles.woodHeader}></div></div>
                <Helmet title="Home"/>
                <h1>KitchCam</h1>
                <div className="acceptedTips"
                <div className="bottom-space">
                    <div className={styles.videoContainer + ' col-xs-12 col-sm-9'}>
                        This will be the promoted live video
                    </div>
                    <div className={styles.chat + ' hidden-xs col-sm-3'}>
                        <div>Chat</div>
                        <ul className="list-unstyled">
                            <li>
                                <div className={styles.imgPreview}></div>
                                <span className={styles.chefName}>Patrick Impey - Yum that looks so tasty</span>
                            </li>
                            <li><div className={styles.imgPreview}></div>
                                <span className={styles.chefName}>Ali Fernandez - MMMM I want to make this</span>
                            </li>
                            <li>
                                <div className={styles.imgPreview}></div>
                                <span className={styles.chefName}>Mike Woo - OooooLALA</span>
                            </li>
                            <li>
                                <div className={styles.imgPreview}></div>
                                <span className={styles.chefName}>Jonny Conner - #WANTTT</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h5>Chicken Picatta<span className={styles.chefNameTitle}> - By Ali Fernandez</span></h5>
                        Yummmy yummy delicious chicken picatta dish come check out her small changes that make for
                        a great recipe!
                        - Click here to watch and chat live!
                    </div>
                </div>
            </div>
        );
    }
}
