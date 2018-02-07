import React, { Component } from 'react';

export default class TopChefs extends Component {

    render() {
        const styles = require('./Chefs.scss');

        return (
            <ul className="list-unstyled">
                <li>
                    <div className={styles.videoPreview}></div>
                    <span className={styles.chefName}>Patrick Impey - Lasagna</span>
                </li>
                <li>
                    <div className={styles.videoPreview}></div>
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
        );
    }
}
