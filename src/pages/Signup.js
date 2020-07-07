import React, { Component } from "react";
import axios from "axios";
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            login: false,
            store: null,
        };
    }
    signup() {
        var bodyFormData = new FormData();
        bodyFormData.set("email", this.state.email);
        bodyFormData.set("password", this.state.password);

        axios({
            method: "post",
            url: "https://bugbytebackend.herokuapp.com/signup",
            data: bodyFormData,
        })
            .then(function (response) {
                console.log(response);
                localStorage.setItem(
                    "signup",
                    JSON.stringify({ login: true, token: response.data.token })
                );
                //window.location.href = "/gallery";
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
               
                    <fieldset>
                        <legend>Signup:</legend>
                        <br/>
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
                                type='button'
                                onClick={() => {
                                    this.signup();
                                }}
                            >
                                Signup
                            </button>
                        </center>
                    </fieldset>
              
            </div>
        );
    }
}

export default Signup;
