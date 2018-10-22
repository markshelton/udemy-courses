import { createStackNavigator, createSwitchNavigator } from "react-navigation";

import EmployeeEdit from "../../components/employee/EmployeeEdit";
import EmployeeList from "../../components/employee/EmployeeList";
import EmployeeCreate from "../../components/employee/EmployeeCreate";
import LoginForm from "../../components/auth/LoginForm";
import ResetPassword from "../../components/auth/ResetPassword";

const AppRouter = createStackNavigator(
  { EmployeeList, EmployeeEdit, EmployeeCreate },
  { initialRouteName: "EmployeeList" }
);
const AuthRouter = createStackNavigator(
  { LoginForm, ResetPassword },
  { initialRouteName: "LoginForm" }
);
const RootNavigator = createSwitchNavigator(
  { AppRouter, AuthRouter },
  { initialRouteName: "AuthRouter" }
);

export default RootNavigator;
