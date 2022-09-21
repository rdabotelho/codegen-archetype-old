import React, { Component } from 'react';
import EmployeeService from '../../services/EmployeeService';
import EmployeeRow from './EmployeeRow';

class EmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = {employees: []};
    }

    componentDidMount() {
        EmployeeService.getEmployees().then(response => {
            this.setState({employees: response.data.data});
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    tabRow() {
        return this.state.employees.map(function (object, i) {
            return <EmployeeRow obj={object} key={i}/>;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Employee List</h3>
                <table className="table table-striped" style={{marginTop: 20}}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
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

export default EmployeeList;