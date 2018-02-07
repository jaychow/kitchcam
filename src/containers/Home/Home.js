import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {initializeWithKey} from 'redux-form';
// import { Link } from 'react-router';
// import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
import * as chefActions from 'redux/modules/chef';
import { TopChefs } from 'components';
import {isLoaded, findTopChefs as findTopChefs} from 'redux/modules/chef';

@asyncConnect([{
    deferred: true,
    promise: ({store: {dispatch, getState}}) => {
        if (!isLoaded(getState())) {
            return dispatch(findTopChefs());
        }
    }
}])
@connect(
    state => ({
        chefs: state.chef.data,
        editing: state.chef.editing,
        error: state.chef.error,
        loading: state.chef.loading
    }),
    {...chefActions, initializeWithKey})
export default class Home extends Component {
    static propTypes = {
        topChefs: PropTypes.array,
        error: PropTypes.string,
        loading: PropTypes.bool,
        initializeWithKey: PropTypes.func.isRequired,
        editing: PropTypes.object.isRequired,
        findTopChefs: PropTypes.func.isRequired,
        editStart: PropTypes.func.isRequired
    };

    state = {
        foodType: 'Chicken',
        country: 'Indian',
        countryList: false,
        showOptions: false
    };

    componentDidMount() {
        console.log(this.props.findTopChefs());
    }

    handleToggleOptions = () => this.setState({showOptions: !this.state.showOptions});
    handleToggleCountryList = () => this.setState({countryList: !this.state.countryList});

    render() {
        console.log(this.props.topChefs);

        const styles = require('./Home.scss');

        return (
            <div className={styles.home + ' container-fluid'}>
                <div className="row"><div className={styles.woodHeader}></div></div>
                <Helmet title="Home"/>
                <h1>KitchCam</h1>
                <div className="row bottom-space">
                    <div className={styles.videoContainer + ' col-xs-12 col-sm-8'}>
                        This will be the promoted live video
                    </div>
                    <div className={styles.topChefs + ' hidden-xs col-sm-4'}>
                        <div>Top Live Chefs</div>
                        <TopChefs />
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h5>Chicken Picatta<span className={styles.chefNameTitle}> - By Ali Fernandez</span></h5>
                        Yummmy yummy delicious chicken picatta dish come check out her small changes that make for
                        a great recipe!
                        - Click here to watch and chat live!
                    </div>
                </div>
                <div className={styles.cookPreview + ' row bottom-space'}>
                    <div className="col-xs-12 bottom-space">
                        <h2>Chefs Cooking ... <div className={styles.list}>
                                <span onClick={this.handleToggleOptions} className={styles.placeholder}>
                                    {this.state.foodType} <i className="fa fa-sort-down" />
                                </span>
                            <ul className={this.state.showOptions ? '' : 'hidden'}>
                                <li>
                                    <a onClick={() => this.setState({foodType: 'Chicken', showOptions: false})}>
                                        Chicken
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => this.setState({foodType: 'Salad', showOptions: false})}>
                                        Salad
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => this.setState({foodType: 'Pasta', showOptions: false})}>
                                        Pasta
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => this.setState({foodType: 'Appetizers', showOptions: false})}>
                                        Appetizers
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => this.setState({foodType: 'Dessert', showOptions: false})}>
                                        Dessert
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => this.setState({foodType: 'Soup', showOptions: false})}>
                                        Soup
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => this.setState({foodType: 'Vegetarian', showOptions: false})}>
                                        Vegetarian
                                    </a>
                                </li>
                            </ul>
                        </div></h2>
                    </div>
                    <div className="col-xs-3">
                        <div className={styles.previewVideo}></div>
                    </div>
                    <div className="col-xs-3">
                        <div className={styles.previewVideo}></div>
                    </div>
                    <div className="col-xs-3">
                        <div className={styles.previewVideo}></div>
                    </div>
                    <div className="col-xs-3">
                        <div className={styles.previewVideo}></div>
                    </div>
                </div>
                <div className={styles.cookPreview + ' row bottom-space'}>
                    <div className="col-xs-12 bottom-space">
                        <h2>Chefs Specializing in ... <div className={styles.list}>
                                <span onClick={this.handleToggleCountryList} className={styles.placeholder}>
                                    {this.state.country}<i className="fa fa-sort-down" />
                                </span>
                            <ul className={this.state.countryList ? '' : 'hidden'}>
                                <li>
                                    <a onClick={() => this.setState({country: 'Mexican', countryList: false})}>
                                        Mexican
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => this.setState({country: 'Chinese', countryList: false})}>
                                        Chinese
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => this.setState({country: 'French', countryList: false})}>
                                        French
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => this.setState({country: 'Italian', countryList: false})}>
                                        Italian
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => this.setState({country: 'Mediterranean', countryList: false})}>
                                        Mediterranean
                                    </a>
                                </li>
                                <li>
                                    <a onClick={() => this.setState({country: 'Korean', countryList: false})}>
                                        Korean
                                    </a>
                                </li>
                            </ul>
                        </div></h2>
                    </div>
                    <div className="col-xs-3">
                        <div className={styles.previewVideo}></div>
                    </div>
                    <div className="col-xs-3">
                        <div className={styles.previewVideo}></div>
                    </div>
                    <div className="col-xs-3">
                        <div className={styles.previewVideo}></div>
                    </div>
                    <div className="col-xs-3">
                        <div className={styles.previewVideo}></div>
                    </div>
                </div>
                <div className="row bottom-space">
                    <div className="col-xs-12">
                        <h2>Categories</h2>
                        <button className="btn btn-kitchen">Desserts</button>
                        <button className="btn btn-kitchen">Dinner</button>
                        <button className="btn btn-kitchen">Chicken</button>
                        <button className="btn btn-kitchen">Salad</button>
                        <button className="btn btn-kitchen">Pasta</button>
                    </div>
                </div>
            </div>
        );
    }
}
