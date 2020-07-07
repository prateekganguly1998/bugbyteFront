import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            login: false,
            store: null,
        };
        this.login = this.login.bind(this);
    }
    login() {
        var bodyFormData = new FormData();
        bodyFormData.set("email", this.state.email);
        bodyFormData.set("password", this.state.password);
        axios({
            method: "post",
            url: "https://bugbytebackend.herokuapp.com/login",
            data: bodyFormData,
        })
            .then(function (response) {
                console.log(response);
                localStorage.setItem(
                    "login",
                    JSON.stringify({ login: true, token: response.data.token })
                );
                //this.setState({login:true})
                //window.location.href = "/gallery";
            })
            .catch(function (error) {
                console.log(error);
            });
        
        //
    }

    render() {
        return (
            <div>
                <div>
                    <fieldset>
                        <legend>Login:</legend>
                        <br />
                        <div className="form-group">
                            <label htmlFor="email">Email: &nbsp;</label>
                            <input
                                className="form-control"
                                type="text"
                                onChange={(event) => {
                                    this.setState({
                                        email: event.target.value,
                                    });
                                }}
                            />
                            <br />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                onChange={(event) => {
                                    this.setState({
                                        password: event.target.value,
                                    });
                                }}
                            />
                            <br />
                        </div>
                        <center>
                            <button
                                className="btn btn-success"
                                type="button"
                                onClick={() => {
                                    this.login();
                                }}
                            >
                                Log In
                            </button>
                        </center>
                    </fieldset>
                </div>
            </div>
        );
    }
}

export default Login;
