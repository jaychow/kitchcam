import React, { Component } from 'react';

export default class Chef extends Component {
    state = {
        chefName: 'Patrick'
    };

    render() {
        return (
            <div className="container-fluid">
                <div className="row bottom-space">
                    <div className="col-xs-12">
                        {this.state.chefName}
                    </div>
                </div>
            </div>
        );
    }
}
