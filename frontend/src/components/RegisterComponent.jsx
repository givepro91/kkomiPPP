import React, {Component} from 'react';
import UserService from "../service/UserService";

class RegisterComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    changeUsernameHandler = (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    registerUser = (event) => {
        event.preventDefault();

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        UserService.registerUser(user).then(res => {
            this.props.history.push('/user/login');
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="container text-center">
                        <h1>Join Page</h1>
                        <form>
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="username" value={this.state.username} onChange={this.changeUsernameHandler} id="staticEmail" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" name="password" value={this.state.password} onChange={this.changePasswordHandler} id="inputPassword" placeholder="Password" />
                                </div>
                            </div>
                            <button type="button" onClick={this.registerUser} className="btn btn-default btn-lg">join</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterComponent;