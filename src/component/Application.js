import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';
import _ from 'lodash';

class Application extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      employees: [
        {empId: 1, fname:'Kalyani', lname: 'Bagale', designation: 'Software Developer'},
        {empId: 2, fname:'Triveni', lname: 'Badgujar', designation: 'Tech Lead'},
        {empId: 3, fname:'Surbhi', lname: 'Tongia', designation: 'Quality Analyst'}
      ]
    }
  }

  addNewEmployee(){
    this.setState({selectedEmployee:{empId:-1}});
  }

  markEmployeeSelected(employee){
    this.setState({selectedEmployee:employee});
  }

  saveEmployee(employee){
    this.state.employees.push(employee);

    this.setState(
      {
        employees:this.state.employees,
        selectedEmployee:null
      }
    );
  }

  updateEmployee(employee){

    var index = _.findIndex(this.state.employees, function(emp) { return emp.empId == employee.empId; });
    this.state.employees[index] = employee;

    this.setState(
      {
        employees:this.state.employees,
        selectedEmployee:null
      }
    );

  }

  deleteEmployee(employee){

    var index = _.findIndex(this.state.employees, function(emp) { return emp.empId == employee.empId; });
    this.state.employees.splice(index, 1);

    this.setState(
      {
        employees:this.state.employees,
        selectedEmployee:null
      }
    );
  }


  render() {

    var employeeList = this.state.employees;

    return (
      <div>
        <Header employeeCount={employeeList}/>
        <Content  employeeList={employeeList}
                  addNewEmployee={this.addNewEmployee.bind(this)}
                  markEmployeeSelected={this.markEmployeeSelected.bind(this)}
                  selectedEmployee={this.state.selectedEmployee}
                  saveEmployee={this.saveEmployee.bind(this)}
                  updateEmployee={this.updateEmployee.bind(this)}
                  deleteEmployee={this.deleteEmployee.bind(this)}/>
        <Footer/>
      </div>
    );
  }
}

export default Application;
