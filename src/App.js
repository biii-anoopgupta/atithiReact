import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useEffect, useState } from 'react'
import textjson from './test.json';
import Login from './AuthScreen/Login'
import SignUp from './AuthScreen/Signup'
import { Link } from 'react-router-dom';
function App() {




  const [urlData, setUrlData] = useState("");

  // console.log(textjson['User Data'][0].email)
  function LogIn() {

    setUrlData("/sign-in");

  }


  return (

    <div className="App">

      <nav className="navbar fixed-top">
        <div style={{ display: "flex", margin: "10px", padding: "10px" }}>
          <button className='btn btn-secondary' style={{ margin: "10px" }} onClick={LogIn}>Login </button>
          <button className='btn btn-secondary' style={{ margin: "10px" }} onClick={() => setUrlData("/sign-up")}>  Sign up</button>




        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">


          {urlData === "/sign-up" ? <SignUp></SignUp> : <Login />}



        </div>
      </div>
    </div>
  )
}
export default App;