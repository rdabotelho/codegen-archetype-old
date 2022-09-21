import React, {Component} from 'react';
import UserSystemService from '../../services/UserSystemService';
import { NotificationContainer, NotificationManager } from 'react-notifications';
 
class UserSystemCreate extends Component {

    constructor(props) {
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeState = this.onChangeState.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            state: ''
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

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeState(e) {
        this.setState({
            state: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const obj = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            state: this.state.state
        };

        UserSystemService.createUserSystem(obj).then(response => {
            NotificationManager.success("UserSystem created successfully", 'Success')
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
                <h3>New User System</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text" className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text" className="form-control" value={this.state.lastName} onChange={this.onChangeLastName}/>
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="number" className="form-control" value={this.state.age} onChange={this.onChangeAge}/>
                    </div>
                    <div className="form-group">
                        <label>State: </label>
                        <select className="form-control" value={this.state.state} onChange={this.onChangeState}>
                            <option value="ACTIVE">ACTIVE</option>
                            <option value="INACTIVE">INACTIVE</option>
                            <option value="CANCELAD">CANCELAD</option>
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

export default UserSystemCreate;