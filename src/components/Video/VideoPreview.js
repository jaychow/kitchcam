import React, { Component } from 'react';
// import { Link } from 'react-router';
// import config from '../../config';

export default class VideoPreview extends Component {
    state = {
        foodType: 'Chicken',
        country: 'Indian',
        countryList: false,
        showOptions: false
    };

    render() {
        const styles = require('./Video.scss');

        return (
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className={styles.videoPreview}>
                    <div className={styles.placeholder}></div>
                    <span className={styles.viewing}><i className="fa fa-eye"/> 10</span>
                    <span>Patrick Impey</span>
                </div>
            </div>
        );
    }
}
