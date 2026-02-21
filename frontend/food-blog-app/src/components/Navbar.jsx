import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import InputForm from "./InputForm";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  // token check
  const token = localStorage.getItem("token");

  // login state
  const [isLogin, setIsLogin] = useState(!!token);

  // jab token change ho to login state update ho
  useEffect(() => {
    setIsLogin(!!token);
  }, [token]);

  // login / logout handler
  const checkLogin = () => {
    if (token) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setIsLogin(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <header>
        Food Blog
        <ul>

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          {/* My Recipe */}
          <li onClick={() => !isLogin && setIsOpen(true)}>
            <NavLink to={isLogin ? "/myRecipe" : "/"}>
              My Recipe
            </NavLink>
          </li>

          {/* Favourites */}
          <li onClick={() => !isLogin && setIsOpen(true)}>
            <NavLink to={isLogin ? "/favRecipe" : "/"}>
              Favourites
            </NavLink>
          </li>

          {/* Login / Logout */}
          <li onClick={checkLogin}>
            <p className="login">
              {isLogin ? "Logout" : "Login"}
            </p>
          </li>

        </ul>
      </header>

      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <InputForm setIsOpen={() => setIsOpen(false)} />
        </Modal>
      )}
    </>
  );
}