import  React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";
// import {useNavigate} from 'react-router-dom'
import { withRouter } from "../services/WithRouter";
import lEmployeeService from "../services/EmployeeService";

class EmployeesList extends Component{
    constructor(props){
        super(props);

        this.state = {
            employees: []
        }
        // const { navigate } = this.props;
        this.addEmployee = this.addEmployee.bind(this); // Binding event handler to the constructor (ToRead : Biding eventHandler in react)
        this.updateEmployee = this.updateEmployee.bind(this);
        this.deleteBtnHandler = this.deleteBtnHandler.bind(this);
    }

    componentDidMount(){ 
        EmployeeService.getEmployees().then((res) => { // getEmployees API is called here.
            this.setState({ employees: res.data });
        });
    }

    addEmployee() {
        this.props.navigate('/add-employee'); // To configure routing for add-employee button.
        // React Router passed 'history' object to each route as props. 
        //ERROR!
    }

    updateEmployee(id) { 
        // We need to route to updateEmployee component and pass the id to it.
        this.props.navigate(`/update-employee/${id}`); // Passing id here as url parameter
    }

    deleteBtnHandler(id) {
        lEmployeeService.deleteEmployee(id).then((res) => {
            window.location.reload();
        });
    }

    render() {
        return (
            <>
                <div>
                    <h2 className="text-center"> Employees List </h2>
                    <div>
                        <button className="btn btn-primary" onClick={this.addEmployee}> Add Employee</button>
                    </div>
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Employee First Name</th>
                                    <th>Employee last Name</th>
                                    <th>Employee Email-Id</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = "employee.id">
                                            <td>
                                                {employee.firstName}
                                            </td>
                                            <td>
                                                {employee.lastName}
                                            </td>
                                            <td>
                                                {employee.emailId}
                                            </td>
                                            <td>
                                                <button className="btn btn-primary" onClick={() => this.updateEmployee(employee.id)}>Update</button>
                                                <button className="btn btn-secondary ml-auto delete-emp" onClick={() => this.deleteBtnHandler(employee.id)} >Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>        
            </>
        )
    }
}
export default withRouter(EmployeesList);