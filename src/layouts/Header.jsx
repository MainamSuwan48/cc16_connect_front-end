import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const guestNav = [
  { to: "/login", text: "Login" },
  { to: "/register", text: "Register" },
];

const teacherNav = [
  { to: "/", text: "Home(teacher)" },
  { to: "/new", text: "New Homework" },
];

const studentNav = [
  { to: "/", text: "Home(student)" },
  { to: "/new", text: "Show Profile" },
];

function Header() {
  const { user, logout } = useAuth();

  const hdlLogout = () => {
    logout();
    alert("You have logged out");
    navigate("/");
  };
  const finalNav = !user?.role
    ? guestNav
    : user.role === "teacher"
    ? teacherNav
    : studentNav;

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Super Homework</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {finalNav.map((item) => (
            <li className="menu-item" key={item.to}>
              <Link to={item.to}>{item.text}</Link>
            </li>
          ))}
          {user?.role && (
            <li className="menu-item">
              <Link to="#" onClick={hdlLogout}>
                Logout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
