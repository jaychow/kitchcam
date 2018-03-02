import React, { Component } from 'react';
import Helmet from 'react-helmet';
// import { Link } from 'react-router';
import { Picker } from 'components';
// import config from '../../config';

export default class Stream extends Component {
    render() {
        const styles = require('./Stream.scss');
        const reddcoinLogo = require('./reddcoin-logo.png');
        const foodList = ['Chicken', 'Salad', 'Pasta', 'Appetizers', 'Dessert', 'Soup', 'Vegetarian', 'Vegan'];

        return (
            <div className={styles.streamPage + ' container-fluid'}>
                <div className="row"><div className={styles.woodHeader}></div></div>
                <Helmet title="Home"/>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="pull-right">
                            <span className="acceptedTips">Tip the Chef: </span>
                            <img className={styles.token} data-toggle="tooltip" title="Reddcoin!"
                                 height="50" width="50" src={reddcoinLogo}></img>
                        </div>
                    </div>
                </div>
                <h3>Ali_ferrealz is cooking: Chicken Piccata</h3>
                <div className="row bottom-space">
                    <div className={styles.videoContainer + ' col-xs-12 col-sm-9'}>
                        This will be the promoted live video
                    </div>
                    <div className={styles.chat + ' hidden-xs col-sm-3'}>
                        <div>Chat</div>
                        <ul className="list-unstyled">
                            <li>
                                <div className={styles.imgPreview}></div>
                                <span className={styles.chefName}>Patricus - Yum that looks so tasty</span>
                            </li>
                            <li><div className={styles.imgPreview}></div>
                                <span className={styles.chefName}>Ali_ferrealz - MMMM I want to make this</span>
                            </li>
                            <li>
                                <div className={styles.imgPreview}></div>
                                <span className={styles.chefName}>Mikey - OooooLALA</span>
                            </li>
                            <li>
                                <div className={styles.imgPreview}></div>
                                <span className={styles.chefName}>Jonjon - #WANTTT</span>
                            </li>
                            <input type="text" placeholder="Enter Text"/>
                            <button className="btn btn-default"> Send</button>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <div className={styles.videoInfo}>
                            <h5>Chicken Picatta<span className={styles.chefNameTitle}> - By Ali Fernandez</span></h5>
                            Yummmy yummy delicious chicken picatta dish come check out her small changes that make for
                            a great recipe!
                            <div className={styles.viewing}>200</div>
                        </div>
                    </div>
                </div>
                <Picker title="Chefs cooking" options={foodList} type="foodType"/>
            </div>
        );
    }
}
