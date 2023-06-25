import React, { useState } from "react";
import "../css/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router";
import 'animate.css'

export default function Login() {
    const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/login", credentials).then((res) => {
        console.log(res);
        if (res.status === 200){
            localStorage.setItem("token", res.data.token);
            console.log(res.data.token);
            navigate("/dashboard");
        }
        else{
            alert("Wrong Credentials")
        }
    })
    .catch(err =>{
      alert("Wrong Credentials")
    })
  };

  return (
    <div className="login">
      <div className="loginCont row animate__animated animate__fadeInUp">
        <div className="col-md-2 left ">
          <img
            src={require("../../resources/pngaaa.com-299137.png")}
            alt="logo"
            className="logo"
          />
          <h1 className="logoTitle">Copilot</h1>
        </div>
        <div className="col-md-10 shapedividers_com-8946">
          <div className="loginForm">
            <h1 className="loginTitle">Login</h1>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <label for="exampleInputPassword1">Password</label>
                <input
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <button onClick={login} type="submit" className="btn btn-primary">
                  Login
                  <FontAwesomeIcon icon={faArrowRightLong} size="xl" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
