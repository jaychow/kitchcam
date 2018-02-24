import React, { Component, PropTypes } from 'react';
import { Videos } from 'components';

export default class Picker extends Component {
    static propTypes = {
        options: PropTypes.array,
        title: PropTypes.string,
        type: PropTypes.string
    };

    state = {
        foodType: 'Chicken',
        country: 'Indian',
        countryList: false,
        showOptions: false,
        topChefs: [],
        loading: true
    };

    handleToggleOptions = () => this.setState({showOptions: !this.state.showOptions});
    handleToggleCountryList = () => this.setState({countryList: !this.state.countryList});

    renderOptions() {
        return this.props.options.map((item, key) =>
            <li key={key}>
                <a onClick={() => this.setState({foodType: item, showOptions: false})}>
                    {item}
                </a>
            </li>
        );
    }

    render() {
        const styles = require('./Picker.scss');

        return (
            <div className={styles.picker}>
                <div className={styles.cookPreview + ' row bottom-space'}>
                    <div className="col-xs-12 bottom-space">
                        <h2>{this.props.title} ... <div className={styles.list}>
                                <span onClick={this.handleToggleOptions} className={styles.placeholder}>
                                    {this.state[this.props.type]} <i className="fa fa-sort-down" />
                                </span>
                            <ul className={this.state.showOptions ? '' : 'hidden'}>
                                {this.renderOptions()}
                            </ul>
                        </div></h2>
                    </div>
                    <Videos/>
                </div>
            </div>
        );
    }
}
