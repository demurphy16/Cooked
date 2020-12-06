import {useState, useEffect} from 'react'
import { Switch, Route, useHistory, Redirect } from 'react-router-dom'
import './App.css';
import Layout from './layouts/layout';
import Login from './screens/Login'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import MainContainer from './containers/MainContainer';


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
  }, [history])
  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/recipes')
  }
  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/recipes')
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
        <Route path='/recipes'>
          <MainContainer
          currentUser={currentUser}
          />
        </Route>
        <Route path='/home'>
          <Redirect  to='/recipes' />
        </Route>
        <Route path='/'>
          <Login
            handleLogin={handleLogin}
            handleRegister={handleRegister}
          />
        </Route>
        
        </Switch>
      </Layout>
  );
}
export default App;