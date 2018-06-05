import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Webcam from 'react-webcam';
// import { Link } from 'react-router';
import { Picker, ChefBio, Chat } from 'components';
// import config from '../../config';

export default class UserStream extends Component {
    render() {
        const styles = require('./Stream.scss');
        const reddcoinLogo = require('./reddcoin-logo.png');
        const foodList = ['Chicken', 'Salad', 'Pasta', 'Appetizers', 'Dessert', 'Soup', 'Vegetarian', 'Vegan'];

        return (
            <div className={styles.streamPage + ' container-fluid'}>
                <Helmet title="Username's kitchen"/>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="pull-right">
                            <span className="acceptedTips">Tip the Chef: </span>
                            <img className={styles.token} data-toggle="tooltip" title="Reddcoin!"
                                 height="50" width="50" src={reddcoinLogo}/>
                        </div>
                    </div>
                </div>
                <h3>Ali_ferrealz is cooking: Chicken Piccata</h3>
                <div className={styles.userToolbar}>
                    <button className="btn btn-default">Follow</button>
                </div>
                <div className="row bottom-space">
                    <div id="webcamSpace" className="col-xs-12 col-sm-8">
                        <Webcam/>
                    </div>
                    <Chat/>
                    <div className="col-xs-12 col-sm-8">
                        <div className={styles.videoInfo + ''}>
                            Yummmy yummy delicious chicken picatta dish come check out her small changes that make for
                            a great recipe!
                        </div>
                    </div>
                    <div className={'col-sm-2 ' + styles.viewing}>
                        <i className="fa fa-user"/> 200
                    </div>
                </div>
                <ChefBio />
                <Picker title="Related Chefs" options={foodList} type="foodType"/>
            </div>
        );
    }
}
