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
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">Login now!</h1>
        </div>
        <div class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form class="card-body" onSubmit={hdlSubmit}>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Your Code</span>
              </label>
              <input
                type="text"
                placeholder="code"
                class="input input-bordered"
                required
                name="code"
                value={input.code}
                onChange={hdlChangeInput}
                pattern="^[st]\d{3}$"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                class="input input-bordered"
                required
                name="password"
                value={input.password}
                onChange={hdlChangeInput}
              />
              <label class="label">
                <a href="#" class="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
