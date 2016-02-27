import React from 'react';
import EmployeeForm from './EmployeeForm';

class RightPanel extends  React.Component{

  render(){

    var selectedEmployee = this.props.selectedEmployee;

    if (selectedEmployee) {
      return (
        <EmployeeForm selectedEmployee={selectedEmployee}
                      saveEmployee={this.props.saveEmployee}
                      updateEmployee={this.props.updateEmployee}
                      deleteEmployee={this.props.deleteEmployee}/>
      );
    }

    return (
      <div className="no-form-text">
          Select Employee from List to Edit-Delete or Click on Add to Create New Employee.
      </div>
    );

  }

}

export default RightPanel;
