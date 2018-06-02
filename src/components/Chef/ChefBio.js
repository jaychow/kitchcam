import React, { Component } from 'react';

export default class ChefBio extends Component {
    state = {
        chefName: 'Patrick'
    };

    render() {
        const styles = require('./Chefs.scss');

        return (
            <div className={styles.chefBio}>
                <div className="container-fluid">
                    <div className="row bottom-space">
                        <div className="col-xs-12 col-sm-9">
                            {this.state.chefName}'s Bio goes here
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            Recipe:
                            <ul>
                                <li>1lb Chicken</li>
                                <li>1tbs Capers</li>
                                <li>1/2 lemon</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
