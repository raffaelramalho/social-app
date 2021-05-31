import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Home from './components/Home'

import useToken from './useToken';


function App() {
  
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken}/>
  }
  return (
    <div className="wrapper">
      <BrowserRouter>
          <Switch>
              <Route path="/dashboard">
                  <Dashboard/>
              </Route>
              <Route path="/preferences">
                  <Preferences/>
              </Route>
              <Route path='/'>
                <Home/>
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
