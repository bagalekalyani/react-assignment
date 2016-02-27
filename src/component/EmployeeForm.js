import React from 'react';

class EmployeeForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      employeeId:props.selectedEmployee.empId,
      employeeFirstName:props.selectedEmployee.fname,
      employeeLastName:props.selectedEmployee.lname,
      employeeDesignation:props.selectedEmployee.designation
    };
  }

  componentWillReceiveProps(nextProps,nextState){
    if(nextProps.selectedEmployee != this.props.selectedEmployee){
      this.setState({
        employeeId:nextProps.selectedEmployee.empId,
        employeeFirstName:nextProps.selectedEmployee.fname,
        employeeLastName:nextProps.selectedEmployee.lname,
        employeeDesignation:nextProps.selectedEmployee.designation,
      });
    }
  }

  employeeFirstNameChange(e){
    this.setState({employeeFirstName:e.target.value});
  }

  employeeLastNameChange(e){
    this.setState({employeeLastName:e.target.value});
  }

  employeeDesignationChange(e){
    this.setState({employeeDesignation:e.target.value});
  }

  saveEmp(){
    // If new employee created
    if(this.props.selectedEmployee.empId < 0){
      this.props.saveEmployee({
          empId:Math.floor((Math.random() * 100) + 1),
          fname:this.state.employeeFirstName,
          lname:this.state.employeeLastName,
          designation:this.state.employeeDesignation
      });
    }// If editing an existing employee
    else{
      this.props.updateEmployee({
        empId:this.state.employeeId,
        fname:this.state.employeeFirstName,
        lname:this.state.employeeLastName,
        designation:this.state.employeeDesignation
      });
    }
  }

  deleteEmp(){
    this.props.deleteEmployee({
      empId:this.state.employeeId,
      fname:this.state.employeeFirstName,
      lname:this.state.employeeLastName,
      designation:this.state.employeeDesignation
    });
  }

  render(){
    var {employeeFirstName, employeeLastName, employeeDesignation} = this.state;

    return (
      <div className="emp-form">
        <h3>Employee Details: </h3>
        <div className="field-label">
            Employee First Name:
        </div>
        <div>
            <input type="text" placeholder="Employee Name" className="form-control"
                value={employeeFirstName}
                onChange={this.employeeFirstNameChange.bind(this)}/>
        </div>
        <div className="field-label">
            Employee Last Name:
        </div>
        <div>
            <input type="text" placeholder="Employee Name" className="form-control"
                value={employeeLastName}
                onChange={this.employeeLastNameChange.bind(this)}/>
        </div>
        <div className="field-label">
            Employee Designation:
        </div>
        <div>
            <input type="text" placeholder="Employee Name" className="form-control"
                value={employeeDesignation}
                onChange={this.employeeDesignationChange.bind(this)}/>
        </div>
        <div className="button-options">
            <button className="submit-button" onClick={this.saveEmp.bind(this)}>Save</button>
            <button className="delete-button" onClick={this.deleteEmp.bind(this)}>Delete</button>
        </div>
      </div>
    )
  }


}

export default EmployeeForm;

