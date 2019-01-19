import React, {Component} from 'react';
import { Button, Form, Input } from 'semantic-ui-react';
import getCookie from 'js-cookie';
class Login extends Component {
    constructor(){
        super()
        this.state = {
            first_name:"",
            last_name:""
        }
    }
    handleInput = (e) => {
        e.preventDefault()
        this.setState({
            [e.currentTarget.name] : e.currentTarget.value
        })
    }
    login = async(e) => {
        e.preventDefault()
        try{
            const csrfCookie = getCookie('csrftoken');
            console.log(csrfCookie)
            const loginJSON = await fetch('http://localhost:8000/people/post/',{
            method: "POST",
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name}),
            credentials: "include",
            headers: {
                'x-csrftoken': csrfCookie,
                'content-type': 'application/json'
            }
            });
            const parsedInfo = await loginJSON.json();
            console.log(parsedInfo)
            if(parsedInfo.loggedIn === true){
                    console.log(parsedInfo.first_name, ' logged in')
                    this.props.history.push("/homepage")
            }
            else{
                this.setState({
                    first_name: "",
                    last_name: ""
                })
            }
        }
        catch(err){
            console.log(err);
        }
    }
    render(){
        return(
            
            <Form onSubmit={this.login}>
                <Input name="first_name" value={this.state.first_name} onChange={this.handleInput}/>
                <Input name="last_name" value={this.state.last_name} onChange={this.handleInput}/>
                <Button type='submit'>Login</Button>
            </Form>
        )
    }
}

export default Login