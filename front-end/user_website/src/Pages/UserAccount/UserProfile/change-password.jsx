import React, { Component } from "react";
import './change-password.css'
import './user-profile'
class ChangePassword extends Component {
    state = {}
    handleSubmit = e => {
        e.preventDefault();
    }; 
    onCloseForm = () =>{
        this.props.onCloseForm();
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit} id="popup-form fixed-top">
                <div className="auth-inner">
                    <h3>Reset Password</h3>
                    <label 
                    className="close-btn" 
                    onClick={this.onCloseForm} 
                    >&times;</label>
                    <div className="form-group">
                        <label className="form-label">New Password:</label>
                        <input type="password" className="form-control" placeholder="New password"
                            onChange={e => this.email = e.target.value}/>
                    </div>

                    <div className="form-group">    
                        <label className="form-label">Confirm New Password:</label>
                        <input type="password" className="form-control" placeholder="Confirm new password"
                            onChange={e => this.password = e.target.value}/>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary form-btn">Reset Password</button>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default ChangePassword;