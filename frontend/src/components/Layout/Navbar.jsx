import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "https://job-board-backend-nbnf.onrender.com/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  return (
    <nav className={isAuthorized ? "navbarShow" : "navbarHide"}>
      <div className="container">
        <div className="logo">
          <img src="/instant-jobs-logo-color.png" className="logo-img" alt="logo" />
        </div>
        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <button>
            <Link to={"/"} onClick={() => setShow(false)}>
              HOME
            </Link>
            </button>
          </li>
          <li>
            <button>
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
              ALL JOBS
            </Link>
            </button>
          </li>
          <li>
            <button>
            <Link to={"/applications/me"} onClick={() => setShow(false)}>
              {user && user.role === "Employer"
                ? "APPLICATIONS"
                : "MY APPLICATIONS"}
            </Link>
            </button>
          </li>
          {user && user.role === "Employer" ? (
            <>
              <li>
                <button>
                <Link to={"/job/post"} onClick={() => setShow(false)}>
                  POST JOB
                </Link>
                </button>
              </li>
              <li>
                <button>
                <Link to={"/job/me"} onClick={() => setShow(false)}>
                  VIEW JOBS
                </Link>
                </button>
              </li>
            </>
          ) : (
            <></>
          )}

          <button onClick={handleLogout}>LOGOUT</button>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
