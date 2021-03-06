import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
    App,
    Home,
    Stream,
    UserStream,
    Widgets,
    Login,
    LoginSuccess,
    Survey,
    NotFound,
    Account,
    Register,
    Kitchen,
    Kitchens,
    Chefs
} from 'containers';

export default (store) => {
    const requireLogin = (nextState, replace, cb) => {
        function checkAuth() {
            const { auth: { user }} = store.getState();
            if (!user) {
                // oops, not logged in, so can't be here!
                replace('/');
            }
            cb();
        }

        if (!isAuthLoaded(store.getState())) {
            store.dispatch(loadAuth()).then(checkAuth);
        } else {
            checkAuth();
        }
    };

    /**
     * Please keep routes in alphabetical order
     */
    return (
        <Route path="/" component={App}>
            { /* Home (main) route */ }
            <IndexRoute component={Home}/>

            { /* Routes requiring login */ }
            <Route onEnter={requireLogin}>
                <Route path="loginSuccess" component={LoginSuccess}/>
            </Route>

            { /* Routes */ }
            <Route path="login" component={Login}/>
            <Route path="survey" component={Survey}/>
            <Route path="widgets" component={Widgets}/>
            <Route path="account" component={Account}/>
            <Route path="live" component={Chefs}/>
            <Route path="username" component={Stream}/>
            <Route path="register" component={Register}/>
            <Route path="stream" component={Stream}/>
            <Route path="user-stream" component={UserStream}/>
            <Route path="kitchen" component={Kitchen}/>
            <Route path="kitchens" component={Kitchens}/>

            { /* Catch all route */ }
            <Route path="*" component={NotFound} status={404}/>
        </Route>
    );
};
