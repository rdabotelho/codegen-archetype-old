import React, {Component} from 'react';
import EmployeeService from '../../services/EmployeeService';
import { NotificationContainer, NotificationManager } from 'react-notifications';
 
class EmployeeCreate extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: ''
        }
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            firstName: this.state.firstName
        };

        EmployeeService.createEmployee(obj).then(response => {
            NotificationManager.success("Employee created successfully", 'Success')
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
                <h3>New Employee</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text" className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName}/>
                        <input type="number" className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName}/>
                        <input type="date" className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName}/>
                        <select className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName}>
                            <option value="enumValueName">enumValueName</option>
                        </select>
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

export default EmployeeCreate;