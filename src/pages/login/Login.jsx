import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useState, useRef } from "react";
import "./login.scss";

const Login = () => {
  const { login, currentUser } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const username = useRef();
  const password = useRef();
  const handleLogin = () => {
    // if get localstorage equal null then not sent data to server
    if (username.current.value === "" || password.current.value === "") {
      setError(true);
    } else {
      login(username.current.value, password.current.value);
    }
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);
  // handle onsubmit form
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // send data to server
  };
  const modalError = (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => setError(false)}>
          &times;
        </span>
        <p>Username or password is incorrect</p>
      </div>
    </div>
  );
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  }, [error]);
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa exercitationem
            dignissimos, error nam, consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          {error && modalError}
          <form onSubmit={handleSubmitForm}>
            <input type="text" placeholder="Username" ref={username} />
            <input type="password" placeholder="Password" ref={password} />
            <button type="submit" onClick={handleLogin}>
              Login
            </button>
            {/* if login is successful, it will redirect to home page */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
