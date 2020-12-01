import { Switch, Route } from 'react-router-dom'

import './App.css';
import Layout from './layouts/layout';
import Login from './screens/Login'

function App() {
  return (
      <Layout>
      <Switch>
        
          <Route path='/login'>
          <h3>Login</h3>
          <Login />
          </Route>
        
          <Route path='/register'>
            <h3>Register</h3>
          </Route>
        
          <Route path='/'>
          <h3>Container</h3>
          </Route>
        
        </Switch>

      </Layout>
  );
}

export default App;
