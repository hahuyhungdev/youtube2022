import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./register.scss";

const Register = () => {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });
  const ref = useRef();
  //handleSubmitForm get value from input and send to server
  const handleSubmitForm = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    //send data to server
    console.log(user);
    console.log("submit");
  };
  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (submitting) {
      if (user.username && user.email && user.password && user.name) {
        ref.current = setTimeout(() => {
          setSubmitting(false);
        }, 3000);
      } else {
        setError(true);
        setSubmitting(false);
      }
    }
    return () => {
      clearTimeout(ref.current);
    };
  }, [submitting]);

  useEffect(() => {
    if (Object.keys(error).length === 0 && submitting) {
      console.log("No error");
    } else if (submitting) {
      console.log("error");
    }
  }, [error]);
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum, alias totam numquam ipsa exercitationem
            dignissimos, error nam, consequatur.
          </p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form className="registerForm" onSubmit={handleSubmitForm}>
            <input type="text" placeholder="Username" name="username" value={user.username} onChange={handleOnChange} />
            <input type="email" placeholder="Email" name="email" value={user.email} onChange={handleOnChange} />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={user.password}
              onChange={handleOnChange}
            />
            <input type="text" placeholder="Name" name="name" value={user.name} onChange={handleOnChange} />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
