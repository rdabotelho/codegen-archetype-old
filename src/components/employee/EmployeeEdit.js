import React, {Component} from 'react';
import EmployeeService from '../../services/EmployeeService';
import { NotificationContainer, NotificationManager } from 'react-notifications';

class EmployeeEdit extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmailId = this.onChangeEmailId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: 0,
            firstName: '',
            lastName: '',
            emailId: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeEmailId(e) {
        this.setState({
            emailId: e.target.value
        });
    }

    componentDidMount() {
        const id = window.location.pathname.match(/\/([0-9]+)$/)[1];
        EmployeeService.getEmployeeById(id).then(response => {
            this.setState({
                id: response.data.data.id,
                firstName: response.data.data.firstName,
                lastName: response.data.data.lastName,
                emailId: response.data.data.emailId,
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId
            //Age: Number(this.state.Age)
        };
        EmployeeService.updateEmployee(obj).then(response => {
            NotificationManager.success("Employee updated successfully", 'Success')
        })
        .catch(function (error) {
            console.log(error);
        });
        setTimeout(function () {
            window.location.href = "/";
        }, 500);
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Edit Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text" className="form-control"
                               value={this.state.firstName}
                               onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text" className="form-control" value={this.state.lastName}
                               onChange={this.onChangeLastName}/>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text" className="form-control" value={this.state.emailId}
                               onChange={this.onChangeEmailId}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-primary"/>
                    </div>
                </form>
                <NotificationContainer/>
            </div> 
        )
    }
}

export default EmployeeEdit;