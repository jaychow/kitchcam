import React, { Component } from 'react';
import { TopChefs } from 'components';

export default class Kitchens extends Component {
    state = {
        chefName: 'Patrick'
    };

    render() {
        const styles = require('./Kitchens.scss');

        return (
            <div className={styles.kitchen}>
                <div className="container">
                    <div className="row bottom-space">
                        <div className="col-xs-9">
                            <h1>Welcome to {this.state.chefName}'s kitchen</h1>
                            <div className={styles.headerBg + ' container'}>
                                <div className={styles.headerUnderlay + ' row bottom-space'}>
                                    <div className={styles.videoContainer + ' col-xs-12 col-sm-8'}>
                                        This will be the promoted live video
                                    </div>
                                    <TopChefs />
                                    <div className="col-xs-12 col-sm-8">
                                        <h5>Chicken Picatta
                                            <span className={styles.chefNameTitle}> - By Ali Fernandez</span></h5>
                                        Yummmy yummy delicious chicken picatta dish come check out her small changes
                                        that make for a great recipe! - Click here to watch and chat live!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
