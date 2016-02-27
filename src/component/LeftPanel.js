import React from 'react';
import EmployeeList from './EmployeeList';

class LeftPanel extends  React.Component{

  render(){
    var {employeeList,selectedEmployee} = this.props;

    return(
      <div>
        <button className="add-emp-button pointer" onClick={()=>this.props.addNewEmployee()}>Add</button>
        <div className="clear-both"></div>
        <EmployeeList employeeList={employeeList}
                      markEmployeeSelected={this.props.markEmployeeSelected}
                      selectedEmployee={this.props.selectedEmployee}/>
      </div>
    );

  }

}

export default LeftPanel;
