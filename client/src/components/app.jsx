import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import Header from './auth/header';
import Blogs from './blogs';
import SingleBlog from './single';
import Nav from './nav';
import PublicBlogs from './publicblogs';
import PublicSingle from './publicsingle';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    {/* <Link to="/goodbye">Goodbye</Link> */}
                    <Header />
                    <Switch>
                        <Route exact path="/" component={PublicBlogs} />
                        <PrivateRoute exact path="/admin" component={Blogs} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route exact path="/:id" component={PublicSingle} />
                        <PrivateRoute exact path="/admin/:id" component={SingleBlog} />

                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;