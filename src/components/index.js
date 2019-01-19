import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login'
import Homepage from './Homepage'
export default class Container extends Component {
    constructor(){
        super()
        this.state = {
            loggedIn: false
        }
    }
    render(){

        return(
            <Switch>
                <Route exact path="/"
                render={(routeProps) => {
                    return (
                        <Login {...routeProps} {...this.props}/>
                    )
                }} />
                <Route exact path="/homepage"
                render={(routeProps) => {
                    return (
                        <Homepage {...routeProps} {...this.props}/>
                    )
                }} />
            </Switch>
        )
    }
}