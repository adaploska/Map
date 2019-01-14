import React, { Component } from "react";

import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../Login/Login.css";
import fire from "../../index"
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            text: 'zaloguj'
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            alert("zalogowano")
            if (this.state.email && this.state.password) {
                console.log('istnieje');
                this.setState({
                    text: "zalogowano"
                })
            }
        }).catch((error) => {
            alert(error);
        });
    }


    render() {
        const childProps = {
            isAuthenticated: this.state.isAuthenticated,
            userHasAuthenticated: this.userHasAuthenticated
        };
        return (
            <div className="popup">
                <div className="Login popup_inner">
                    <form onSubmit={this.handleSubmit}>
                        <Button className="exit" onClick={this.props.click}>X</Button>
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password" />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit" >
                            Login
                        </Button>
                        <Button
                            block
                            bsSize="large"
                            disabled={!this.validateForm()}
                            type="submit" >
                            Sign up
                        </Button>



                    </form>
                </div>

            </div>

        );
    }
}