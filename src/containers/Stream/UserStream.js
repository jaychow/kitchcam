import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Webcam from 'react-webcam';
// import { ChatFeed, Message } from 'react-chat-ui';
// import { Link } from 'react-router';
import { Picker, ChefBio } from 'components';
// import config from '../../config';

export default class UserStream extends Component {
    /* constructor(props) {
        super(props);
        state = {
            messages: [
                new Message({
                    id: 1,
                    message: "I'm the recipient! (The person you're talking to)"
                }),
                new Message({ id: 0, message: "I'm you -- the blue bubble!" })
            ],
            is_typing: false
        };
    } */

    render() {
        const styles = require('./Stream.scss');
        const reddcoinLogo = require('./reddcoin-logo.png');
        const foodList = ['Chicken', 'Salad', 'Pasta', 'Appetizers', 'Dessert', 'Soup', 'Vegetarian', 'Vegan'];
        /* const bubbleStyles = {
            text: {
                fontSize: 30
            },
            chatbubble: {
                borderRadius: 70,
                padding: 40
            }
        };*/

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
                <div className="row bottom-space">
                    <div className="col-xs-12">
                        <div className="col-xs-12 col-sm-9">
                            <Webcam/>
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
                    </div>
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
