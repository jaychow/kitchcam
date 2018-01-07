import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import { Link } from 'react-router';
// import { CounterButton, GithubButton } from 'components';
// import config from '../../config';

export default class Home extends Component {
    render() {
        const styles = require('./Home.scss');

        return (
            <div className={styles.home + ' container-fluid'}>
                <div className="row"><div className={styles.woodHeader}></div></div>
                <Helmet title="Home"/>
                <h1>KitchCam</h1>
                <div className="bottom-space">
                    <div className={styles.videoContainer + ' col-xs-12 col-sm-8'}>
                        This will be the promoted live video
                    </div>
                    <div className={styles.topChefs + ' hidden-xs col-sm-4'}>
                        <div>Top Live Chefs</div>
                        <ul className="list-unstyled">
                            <li>
                                <div className={styles.videoPreview}></div>
                                <span className={styles.chefName}>Patrick Impey - Lasagna</span>
                            </li>
                            <li><div className={styles.videoPreview}></div>
                                <span className={styles.chefName}>Ali Fernandez - Chicken Piccata</span>
                            </li>
                            <li>
                                <div className={styles.videoPreview}></div>
                                <span className={styles.chefName}>Mike Woo - Pork Wontons</span>
                            </li>
                            <li>
                                <div className={styles.videoPreview}></div>
                                <span className={styles.chefName}>Jonny Conner - Cereal</span>
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
                <div className="row bottom-space">
                    <div className="col-xs-12">
                        <h2>Categories</h2>
                        <button className="btn btn-kitchen">Desserts</button>
                        <button className="btn btn-kitchen">Dinner</button>
                        <button className="btn btn-kitchen">Chicken</button>
                        <button className="btn btn-kitchen">Salad</button>
                        <button className="btn btn-kitchen">Pasta</button>
                    </div>
                </div>
            </div>
        );
    }
}
