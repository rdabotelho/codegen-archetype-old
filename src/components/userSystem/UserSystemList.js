import React, { Component } from 'react';
import UserSystemService from '../../services/UserSystemService';
import UserSystemRow from './UserSystemRow';

class UserSystemList extends Component {

    constructor(props) {
        super(props);
        this.state = {userSystemList: []};
    }

    componentDidMount() {
        UserSystemService.getUserSystems().then(response => {
            this.setState({userSystemList: response.data.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    tabRow() {
        return this.state.userSystemList.map(function (object, i) {
            return <UserSystemRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">User System List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>State</th>
                        <th colSpan="2">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UserSystemList;