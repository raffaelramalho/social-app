import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import useToken from './useToken';


function App() {
  
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken}/>
  }
  return (
    <div className="wrapper">
      <h1> ESSE EU TERMINO </h1>
      <BrowserRouter>
          <Switch>
              <Route path="/dashboard">
                  <Dashboard/>
              </Route>
              <Route path="/preferences">
                  <Preferences/>
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
