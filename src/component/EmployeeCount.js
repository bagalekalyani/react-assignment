import React from 'react';

class EmployeeCount extends  React.Component{

    render(){

      var employeeCount = this.props.employeeCount;

      return(
        <div className="emp-count">
           Employee Count: {employeeCount ? employeeCount : 0}
        </div>
      );
    }
}

export default EmployeeCount;
