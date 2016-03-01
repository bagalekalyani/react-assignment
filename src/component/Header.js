import React from 'react';
import EmployeeCount from './EmployeeCount';

class Header extends  React.Component{

    render(){

      var employees = this.props.employeeCount;

      var employeeCount = employees ? employees.length : 0;

      return(
        <div className="header">
          <div className="logo"><img className="logo-img" src='./images/logo.png'/></div>
          <EmployeeCount employeeCount={employeeCount}/>
        </div>
      );
    }
}

export default Header;
