import {useState} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import './App.css';
import Layout from './layouts/layout';
import Login from './screens/Login'
import { loginUser } from './services/auth'

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()


  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/')
  }

  return (
      <Layout>
      <Switch>
        
          <Route path='/login'>
          <h3>Login</h3>
          <Login
          handleLogin={handleLogin}
          />
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
