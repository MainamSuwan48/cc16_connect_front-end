import React from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function LoginForm() {
  const [input, setInput] = React.useState({
    code: "",
    password: "",
  });

  const { setUser } = useAuth();

  const hdlChangeInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    let codeFor = input.code.toLocaleLowerCase().startsWith("t")
      ? "t_code"
      : "s_code";
    const loginObj = {
      [codeFor]: input.code,
      password: input.password,
    };
    e.preventDefault();
    try {
      const rs = await axios.post("http://localhost:8888/auth/login", loginObj);
      console.log(rs.data.token);
      localStorage.setItem("token", rs.data.token);
      const rsUser = await axios.get("http://localhost:8888/auth/me", {
        headers: {
          Authorization: `Bearer ${rs.data.token}`,
        },
      });
      console.log("*******",rsUser.data)
      setUser(rsUser.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={hdlSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Code</span>
              </label>
              <input
                type="text"
                placeholder="code"
                className="input input-bordered"
                required
                name="code"
                value={input.code}
                onChange={hdlChangeInput}
                pattern="^[st]\d{3}$"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
                value={input.password}
                onChange={hdlChangeInput}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
