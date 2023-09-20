import React, { Component } from "react";
import lEmployeeService from "../services/EmployeeService";
import { withRouter } from "../services/WithRouter";

class AddEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      emailId: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
  }

  saveBtnEmployee = (e) => {
    e.preventDefault();
    let serviceRequest = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
    };
    console.log(serviceRequest);
    lEmployeeService.saveEmployee(serviceRequest).then((res) => {
      this.props.navigate("/employees");
    });
  };
  cancelBtnHandler = (e) => {
    this.props.navigate("/employees");
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Add Employee</h3>
              <div className="card-body">
                <form>
                  <div>
                    <label htmlFor=""> First Name : </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      name="FirstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div>
                    <label htmlFor=""> Last Name : </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="LastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div>
                    <label htmlFor=""> Email-ID : </label>
                    <input
                      type="text"
                      placeholder="Email ID"
                      name="EmailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveBtnEmployee}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancelBtnHandler}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      // <p>Test</p>
    );
  }
}

export default withRouter(AddEmployee);
