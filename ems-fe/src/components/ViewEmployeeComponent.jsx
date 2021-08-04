import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

export default class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((response) => {
            this.setState({employee: response.data});
        });
    }

    render() {
        return (
            <div>
                <br />
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">Çalışan Bilgileri</h3>
                    <div className="card-body">
                        <div className="row">
                            <label>Adı</label>
                            <div> {this.state.employee.firstName} </div>
                        </div>
                        <div className="row">
                            <label>Soyadı</label>
                            <div> {this.state.employee.lastName} </div>
                        </div>
                        <div className="row">
                            <label>Email</label>
                            <div> {this.state.employee.emailId} </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
