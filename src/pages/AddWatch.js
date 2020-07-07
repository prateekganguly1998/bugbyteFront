import React, { Component } from "react";
import axios from "axios";
class AddWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            price: null,
            file: null,
            store: null,
            login: false,
        };
    }
    componentDidMount() {
        this.storeCollector();
    }
    storeCollector() {
        let store = JSON.parse(localStorage.getItem("login"));
        if (store && store.login) {
            this.setState({ login: true, store: store.token });
        }
    }
    onFileChange = (event) => {
        // Update the state
        this.setState({ file: event.target.files[0] });
        console.log(this.state.file);
    };
    addWatch() {
        const token = this.state.store;
        var bodyFormData = new FormData();
        bodyFormData.set("title", this.state.title);
        bodyFormData.set("description", this.state.description);
        bodyFormData.set("price", Number(this.state.price));
        bodyFormData.append("image", this.state.file);
        console.log(bodyFormData);

        axios({
            method: "post",
            url: "https://bugbytebackend.herokuapp.com/addwatch",
            headers: { Authorization: token },
            data: bodyFormData,
        })
            .then(function (response) {
                console.log(response);
                window.location.href='gallery'
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className='main'>
                <div className="form-group">
                    <label className="form-group" htmlFor="title">
                        Title: &nbsp;
                    </label>
                    <input
                        id="title"
                        className="form-control"
                        type="text"
                        onChange={(event) => {
                            this.setState({ title: event.target.value });
                        }}
                    />
                    <br />
                </div>
                <div className="form-group">
                    <label className="form-group" htmlFor="description">
                        Description: &nbsp;
                    </label>
                    <input
                        id="description"
                        className="form-control"
                        type="text"
                        onChange={(event) => {
                            this.setState({ description: event.target.value });
                        }}
                    />
                    <br />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        id="price"
                        className="form-control"
                        type="text"
                        onChange={(event) => {
                            this.setState({ price: event.target.value });
                        }}
                    />
                    <br />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Add Image*</label>
                    <input
                        id="image"
                        className="form-control-file"
                        type="file"
                        onChange={this.onFileChange}
                    />
                    <br />
                </div>

                <button className='btn btn-info'
                    type="submit"
                    onClick={() => {
                        this.addWatch();
                    }}
                >
                    Add Watch
                </button>
            </div>
        );
    }
}

export default AddWatch;
