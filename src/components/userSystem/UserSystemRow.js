import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import UserSystemService from '../../services/UserSystemService';

class UserSystemRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete() {
        if (!window.confirm("Confirm exclusion?")) return; 
        UserSystemService.deleteUserSystem(this.props.obj.id).then( res => {
            setTimeout(function () {
                window.location.href = "/";
            }, 300);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.firstName}
                </td>
                <td>
                    {this.props.obj.lastName}
                </td>
                <td>
                    {this.props.obj.age}
                </td>
                <td>
                    {this.props.obj.state}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
                <NotificationContainer/>
            </tr>
            
        );
    }
}

export default UserSystemRow;