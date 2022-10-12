import axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { BrowserRouter, Link, useNavigate } from 'react-router-dom';
import Boss from '../dashboard/Boss';
import Dashboard from '../dashboard/DashboardUI/Dashboard';
import textjson from '../test.json';

export default function LogIn() {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [showPass, setShowPass] = useState("password");
  const [Loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const user = {
    "email": Email,
    "password": Pass
  }

  const ShowPass = () => {
    if (showPass === "password") {
      setShowPass("text")
    } else {
      setShowPass("password")
    }

  }

  const handleSubmit = async (e) => {
    setLoader(true)
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3111/api/user/login", user, {
      }).then((res) => {
        if (res.data.rc >= 0) {
          console.log("you are logged in ")
          // console.log(res.data)
          setLoader(false)
          // console.log(res.data.token)

          sessionStorage.setItem('x-access-token', res.data.token)

          navigate('/Boss', { state: { name: res.data.user.name, token: res.data.token } })

        }
        else {
          console.log("incorrect")
          console.log(res.data.rc)

        }
      })
    }
    catch (err) {
      console.log(err)
    }

  }

  // "email": "admin@atithi.in",
  // "password": "123456"

  return (

    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          onChange={e => setEmail(e.target.value)}

        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type={showPass}
          className="form-control"
          placeholder="Enter password"
          name="pass"
          id='pass'
          onChange={(event) => setPass(event.target.value)}

        />
        <input type="checkbox" onClick={ShowPass} /> Show passowrd
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary" >
          submit

        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
      </p>
    </form>
  )

}