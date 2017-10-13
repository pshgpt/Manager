import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Employee from './components/Employee';
import CreateEmployee from './components/CreateEmployee';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router styles={{ alignItem: 'center' }}>
    <Scene key="root">
     <Scene key="login" component={LoginForm} title="Login" initial />
     <Scene
       onRight={() => Actions.create_employee()}
       rightTitle="Add"
       key="employee"
       component={Employee}
       title="Employee"
       type="reset"
     />
     <Scene key="create_employee" component={CreateEmployee} title="Create Employee" />
     <Scene key="employeeEdit" component={EmployeeEdit} title=" Edit Employee" />
    </Scene>

     </Router>
  );
};

export default RouterComponent;
