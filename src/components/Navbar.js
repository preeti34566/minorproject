import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../AuthContext";
//import Button from 'react-bootstrap/Button';
import "../cssfile/Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="list">
        <ul>
          <li>
            <Link to="/">
              <a className="homebox">Home</a>
            </Link>
          </li>
          <li>
            <div class="dropdown">
              <button>Detections</button>
              <div class="dropdown-options">
                <Link to='/phising'>
                <a href="#">Phising website detection</a>
                </Link>
                <Link to='/picture'>
                <a href="#">Image forgery detection</a>
                </Link>
              </div>
            </div>
          </li>
        </ul>
        </div>
        <Link to="/login">
          <div className="btncls">
            <div className="p-2 bd-highlight">
              <button className="button" variant="info">
                Login
              </button>
            </div>
          </div>
        </Link>
      </nav>
    </>
  );
}
