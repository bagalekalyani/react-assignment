import React from 'react';
import _ from 'lodash';

class EmployeeList extends  React.Component{

  render(){
    var {employeeList,selectedEmployee} = this.props;

    var titles = ['Employee ID', 'First Name', 'Last Name', 'Designation'];

    return (
      <table className="employee-list-table">
        <thead>
          <tr>
            {titles.map(function(title) {
              return <th key={title}>{title}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {_.map(employeeList,(employee) =>{
            return (
              <tr key={employee.empId} onClick={()=>this.props.markEmployeeSelected(employee)} className={'pointer'+(this.props.selectedEmployee && (this.props.selectedEmployee.empId == employee.empId)? ' selected-employee' : '')}>
                <td className="text-center">{employee.empId}</td>
                <td>{employee.fname}</td>
                <td>{employee.lname}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );

  }

}

export default EmployeeList;
