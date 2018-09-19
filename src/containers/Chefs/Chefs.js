import React, {Component, PropTypes} from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Videos } from 'components';


export default class Chefs extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired
    };

    state = {
        chefName: 'Patrick'
    };

    getSortName() {
        const { location } = this.props;
        if (location) {
            switch (location.query.sort) {
                case 'viewers':
                    return 'Most watchers';
                case 'rating':
                    return 'Top Chefs';
                case 'time':
                    return 'Time To Make';
                default:
                    return 'Sort';
            }
        }

        return 'Sort';
    }

    render() {
        const styles = require('./Chefs.scss');
        const sortName = this.getSortName();

        return (
            <div className={styles.chefs}>
                <div className="container-fluid">
                    <div className="row bottom-space">
                        <div className="col-xs-12 bottom-space">
                            <DropdownButton bsStyle="primary" title={sortName} id="sortBtn" className="pull-right">
                                <MenuItem eventKey="1" active={sortName === 'Most watchers'}>Watchers</MenuItem>
                                <MenuItem eventKey="2" active={sortName === 'Top Chefs'}>Chef Rating</MenuItem>
                                <MenuItem eventKey="3" active={sortName === 'Time Streaming'}>Time Streaming</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey="4"><i className="fa fa-times"/> Clear Search</MenuItem>
                            </DropdownButton>
                        </div>
                        <Videos/>
                        <Videos/>
                        <Videos/>
                    </div>
                </div>
            </div>
        );
    }
}
