import React, {Component} from 'react';

export default class Login extends Component {
    constructor(){
        super()
    }
    componentWillMount(){
        if(this.props.loggedIn === false){
            this.props.history.push("/")
        }
    }
    render(){
        return(
            <p>hello</p>
        )
    }
}
