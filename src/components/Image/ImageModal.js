import React, { Component, PropTypes } from 'react';
// import { Link } from 'react-router';

export default class ImageModal extends Component {
    static propTypes = {
        showModal: PropTypes.bool
    };

    state = {
        showModal: true
    };

    render() {
        const styles = require('./Image.scss');
        const patrick = require('./patrick.jpg');

        return (
            <div className={styles.imageModal}>
                {this.state.showModal ?
                    <div className="modal fade show in" id="imageModal" tabIndex="-1" role="dialog"
                         aria-labelledby="myModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content full-round-base">
                                <div className="modal-header">
                                    <i className={`fa fa-pencil ${styles.editButton}`}
                                       onClick={() => this.setState({showModal: false})}/>
                                    <i className={`fa fa-download ${styles.downloadButton}`}
                                       onClick={() => this.setState({showModal: false})}/>
                                    <i className={`fa fa-times-circle-o ${styles.closeButton}`}
                                       onClick={() => this.setState({showModal: false})}/>
                                    <img className={styles.modalPhoto} data-toggle="tooltip" title="Patrick!"
                                         src={patrick}/>
                                </div>
                            </div>
                        </div>
                    </div> :
                    null}
            </div>
        );
    }
}
