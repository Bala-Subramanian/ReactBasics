import './App.css';
import { Route } from "react-router-dom";

import Headers from './components/Headers/Headers';
import PropsAndState from './components/PropsAndState/PropsAndState';
import Login from './components/Login/Login';
import SigninComponent from './components/SigninComponent/SigninComponent';
import UserlistComponent from './components/UserlistComponent/UserlistComponent';
import Lifecycle from './components/Lifecycle/Lifecycle';
import UserItem from './components/UserItem/UserItem';
function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signin" component={SigninComponent} />
      <Route path="/Userlist" component={UserlistComponent} />
      <Route path="/propsandstate" component={() => <PropsAndState prop1="Parameter1" />} ></Route>
      <Route path="/lifecycle" component={() => <Lifecycle favcolor="param-yellow"></Lifecycle>} />
      <Route path="/users/:id" component={UserItem} />
    </div>
  );
}

export default App;
