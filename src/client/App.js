import React from "react";
import {Route, Switch} from "react-router-dom";

import Routers from "/src/routers";
import useStyles from 'isomorphic-style-loader/useStyles'
import Header from "./components/Header/Header";

import s from "./App.css"
import withStyles from "isomorphic-style-loader/withStyles";

const App = (props, context) => {
    console.log(s)
    return  (
        <div className={s.App}>
            <Header/>
            <Switch>
                {Routers.map((component, index) => (
                    <Route key={index} path={component.url} exact component={component.component}/>
                ))}
            </Switch>
        </div>
    )

}

export default withStyles(s)(App);