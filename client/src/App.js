import {useState, useEffect} from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import './App.css';
import AddIngredients from './screens/AddIngredients'
import Home from './screens/Home'
import Layout from './layouts/layout';
import Login from './screens/Login'
import MyRecipes from './screens/MyRecipes'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import MoreDetails from './screens/MoreDetails';
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
  }, [])


  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/home')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/home')
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
      
          
        <Route path='/home'>
          <Home />
        </Route>


        <Route path='/myRecipes'>
          <MyRecipes />
        </Route>

        <Route path='/createRecipe'>
          <MainContainer />
        </Route>

        <Route path={`/recipes/:id`}>
          <MoreDetails />
        </Route>

        <Route path={`/recipes/:id/add/ingredients`}>

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
