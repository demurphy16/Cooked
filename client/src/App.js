import {useState, useEffect} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import './App.css';
import Home from './screens/Home'
import Layout from './layouts/layout';
import Login from './screens/Login'
import Register from './screens/Register';
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
      if (!userData) {
        history.push('/')
      }
    }
    handleVerify()
  }, [])


  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/home')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/login')
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
    history.push('/')
  }

  return (
    <Layout
      currentUser={currentUser}
      handleLogout={handleLogout}
    >
        <Switch>
        
          <Route path='/login'>
          <h3>Login</h3>
          <Login
          handleLogin={handleLogin}
          />
          </Route>
        
          <Route path='/register'>
          <Register
          handleRegister={handleRegister}
          />
        </Route>
        
        <Route path='/home'>
          <Home
          />
        </Route>
        
          <Route path='/'>
          <h3>Container</h3>
          </Route>
        
        </Switch>

      </Layout>
  );
}

export default App;
