import logo from './logo.svg';
import './App.css';
import React from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

// Login and Register page
const FrontPage = () => {
  // state to track if logged in?
  const [loggedIn, setLoggedIn] = useState(false)
  // state to track what page to be on?
  // seems primitive and bruteforce idk
  const [page, setPage] = useState({
    front: true, login:false, register:false, welcome:false
  })

  const toLoginPage = () => {
    // TODO
    console.log('goes to login page')
  }
  const toRegisterPage = () => {
    // TODO
    console.log('goes to register page')
  }

  // TODO: if we track the current page through the state, then use
  // if-else to render the correct page

  return (
    <div className="center">
      <Button handleClick={toLoginPage} text="Login" />  
      <br />
      <Button handleClick={toRegisterPage} text="Register" />  
    </div>
  )
}

// Login Form
const LoginPage = () => {
  // TODO, might need a state

  return (
    <div>
      <h1>Login</h1>
      <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username"></input>
        <br />
        <label for="password">Password:</label>
        <input type="text" id="password" name="password"></input>
        <br /> <br />
        <input type="submit" value="Submit" className="formButton"></input>
      </form>
    </div>
    // TODO: pressing submit re-renders the page while passing
    // username to WelcomPage (see below) 
    /* To do so, we might need to add a state and update it when 'submit' is
     pressed. Re-rendering the page to WelcomePage if the user is valid 
     and re-rendering this page if the user is invalid */
  )
  
}

const handleLogOut = () => {
  // TODO
}

// User welcome page
const WelcomePage = ({username}) => {
  return (
    <div>
      <h1>Hello, {username}</h1>
      <Button handleClick={handleLogOut} text="Logout" />
    </div>
  )
}

// Register Form
const RegisterPage = () => {
  // any states?

  return (
    <div>
      <h1>Register</h1>
        <form>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username"></input>
          <br />
          <label for="password">Password:</label>
          <input type="text" id="password" name="password"></input>
          <br /> <br />
          <input type="submit" value="Register" className="formButton"></input>
        </form>
    </div>
    // When "register" is pressed and the username is unique, state should update?
    // re-rendering the page to WelcomePage({username})
  )
}

function App() {
  return (
    <FrontPage />
  );
}

export default App;
