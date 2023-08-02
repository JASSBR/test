
import Dashboard from "./components/Dashboard";
import Login from "./components/Login/Login";
import UserEdit from "./components/UserEdit.jsx";
import UserForm from "./components/UserForm.jsx";
import UserList from "./components/UserList.jsx";

const AppRoutes = [
  {
    path: '/login',
    element: <Login />
  }
  ,
  {
    index : true,
    path: '/userList',
    element: <UserList />
  },
  {
    path: '/userForm',
    element: <UserForm />
  },
  {
    path: '/userEdit/:id',
    element: <UserEdit />
  },
  {
    path: '/Home',
    element: <Dashboard />
  }
];

export default AppRoutes;
