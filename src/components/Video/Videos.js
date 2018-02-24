import React, { Component } from 'react';
import { VideoPreview } from 'components';
// import { Link } from 'react-router';
// import config from '../../config';

export default class Videos extends Component {
    state = {
        foodType: 'Chicken',
        country: 'Indian',
        countryList: false,
        showOptions: false
    };

    render() {
        // const styles = require('./Video.scss');

        return (
            <div>
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
                <VideoPreview />
            </div>
        );
    }
}
