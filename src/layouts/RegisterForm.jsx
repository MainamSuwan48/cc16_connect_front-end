import React from "react";
import axios from "axios";

function RegisterForm() {
  const [input, setInput] = React.useState({
    s_code: "",
    firstname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const hdlChangeInput = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setInput((prv) => ({ ...prv, [e.target.name]: e.target.value }));
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    try {
      const rs = await axios.post("http://localhost:8888/auth/register",input);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          
        <h1 className="text-5xl font-bold">Register new Student</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body"
          onSubmit={hdlSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Student Code</span>
              </label>
              <input
                type="text"
                placeholder="your student code"
                className="input input-bordered"
                required
                name="s_code"
                value={input.s_code}
                onChange={hdlChangeInput}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name"
                className="input input-bordered"
                required
                name="firstname"
                value={input.firstname}
                onChange={hdlChangeInput}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <input
                type="text"
                placeholder="your email"
                className="input input-bordered"
                required
                name="email"
                value={input.email}
                onChange={hdlChangeInput}
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="confirmPassword"
                value={input.confirmPassword}
                onChange={hdlChangeInput}
              />
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

export default RegisterForm;
