import React, {Component} from 'react';

class LoginComponent extends Component {

    registerPage() {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="container text-center">
                        <h1>Login Page</h1>
                        <form action="">
                            <div className="form-group row">
                                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="staticEmail" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary btn-lg mr-3">login</button>
                            <a onClick={()=>this.registerPage()} className="btn btn-default btn-lg">join</a>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;