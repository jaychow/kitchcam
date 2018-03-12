import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {initializeWithKey} from 'redux-form';
// import { Link } from 'react-router';
// import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
import * as chefActions from 'redux/modules/chef';
import { TopChefs, Picker } from 'components';
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
        showOptions: false,
        topChefs: [],
        loading: true
    };

    componentWillMount() {
        this.props.findTopChefs().then((data) => {
            this.setState({topChefs: data, loading: false});
        }).catch((error)=> {
            console.error('CHEF ERROR: ', error);
        });
    }

    handleToggleOptions = () => this.setState({showOptions: !this.state.showOptions});
    handleToggleCountryList = () => this.setState({countryList: !this.state.countryList});

    render() {
        if (this.state.loading) {
            return <div />;
        }

        const topChefs = this.state.topChefs;
        console.log(topChefs);

        const styles = require('./Home.scss');
        const countryList = ['Mexican', 'Chinese', 'French', 'Italian', 'Mediterranean', 'Korean', 'Japanese'];
        const foodList = ['Chicken', 'Salad', 'Pasta', 'Appetizers', 'Dessert', 'Soup', 'Vegetarian', 'Vegan'];

        return (
            <div className={styles.home + ' container-fluid'}>
                <div className="row"><div className={styles.woodHeader}></div></div>
                <Helmet title="Home"/>
                <div className="row">
                    <div className={styles.headerBg + ' container'}>
                        <div className={styles.headerUnderlay + ' row bottom-space'}>
                            <div className={styles.videoContainer + ' col-xs-12 col-sm-8'}>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/OsuY82AyGHE"
                                        frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                            </div>
                            <TopChefs />
                            <div className="col-xs-12 col-sm-8">
                                <h5>Chicken Picatta
                                    <span className={styles.chefNameTitle}> - By Ali Fernandez</span></h5>
                                Yummmy yummy delicious chicken picatta dish come check out her small changes
                                that make for a great recipe! - Click here to watch and chat live!
                            </div>
                        </div>
                    </div>
                </div>
                <Picker title="Chefs specializing in" options={countryList} type="country"/>
                <Picker title="Chefs cooking" options={foodList} type="foodType"/>
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
