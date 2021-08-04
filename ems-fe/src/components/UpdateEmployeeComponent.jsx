import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class UpdateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((response) => {
            let employee = response.data;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        console.log('employee => ' + JSON.stringify(employee));
        EmployeeService.updateEmployee(employee, this.state.id).then((response) => {
            this.props.history.push('/employees');
        });
    }

    cancel() {
        this.props.history.push('/employees');
    }

    changeFirstNameHandler(event) {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler(event) {
        this.setState({ lastName: event.target.value });
    }

    changeEmailIdHandler(event) {
        this.setState({ emailId: event.target.value });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Çalışanı Güncelle</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Adı:</label>
                                        <input placeholder="Adı" name="firstName" className="form-control" value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Soyadı:</label>
                                        <input placeholder="Soyadı" name="lastName" className="form-control" value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label>Email:</label>
                                        <input placeholder="Email" name="emailId" className="form-control" value={this.state.emailId} onChange={this.changeEmailIdHandler} />
                                    </div>
                                    <div className="form-group mt-3">
                                        <button className="btn btn-success" onClick={this.updateEmployee}>Güncelle</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>İptal</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
