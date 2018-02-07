import React, { Component } from 'react';
import { Chef } from 'components';
// import { Link } from 'react-router';
// import config from '../../config';

export default class Chefs extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row bottom-space">
                    <div className="col-xs-12">
                        <Chef />
                    </div>
                </div>
            </div>
        );
    }
}
