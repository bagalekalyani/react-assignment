import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

class Content extends React.Component{

  render(){
    var employeeList = this.props.employeeList;
    var selectedEmployee = this.props.selectedEmployee;

    return(
      <div className="content">
        <div className="left-panel">
          <LeftPanel  employeeList={employeeList}
                      markEmployeeSelected={this.props.markEmployeeSelected}
                      addNewEmployee={this.props.addNewEmployee}
                      selectedEmployee={this.props.selectedEmployee}/>
        </div>
        <div className="right-panel">
          <RightPanel selectedEmployee={this.props.selectedEmployee}
                      saveEmployee={this.props.saveEmployee}
                      updateEmployee={this.props.updateEmployee}
                      deleteEmployee={this.props.deleteEmployee}/>
        </div>
      </div>
    );
  }

}

export default Content;

