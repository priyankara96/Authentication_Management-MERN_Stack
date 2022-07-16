import React from "react";
import "./Header.css";
import logo from "../images/user.png";
import useUser from "../services/UserContext";
import { AiOutlineLogin } from "react-icons/ai";
import useRequest from "../services/RequestContext";
import { useHistory } from "react-router-dom";

function Header() {
  const { user } = useUser();
  console.log("User", user);

  const { updateToken } = useRequest();
  const { setUser } = useUser();

  const history = useHistory();
  const logout = async () => {
    await updateToken();
    setUser({});

    history.push("/login");
    window.location.reload(true);
  }; 

  if (user == undefined) {
    return (
      <>
        <div className="conatiner"> {/* ----------------------- When there is no login opportunity */}
          <div className="header">
          <a href="/"><img src={logo} alt="logo" className="logo"  /></a>

            <ul className="pages">
              <a href="/">
                Home
              </a>
              <a href="#">
                AAAA
              </a>
              <a href="#">
                BBBB
              </a>
              <a href="#">
                CCCC
              </a>
              <a href="#">
                DDDD
              </a>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                EEEE
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">aaaa</a></li>
                <li><a className="dropdown-item" href="#">bbbb</a></li>
                <li><a className="dropdown-item" href="#">cccc</a></li>
                <li><a className="dropdown-item" href="#">dddd</a></li>
              </ul>
              </li>
              <a href="#">
                FFFF
              </a>
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  } else if (user.role == "Customer") { //  --------------------- When there is a customer login opportunity  
    return (
      <>
        <div className="conatiner">
          <div className="header">
          
          <a href="/"><img src={logo} alt="logo" className="logo"  /></a>

          <ul className="pages">
              <a href="/">
                Home
              </a>
              <a href="#">
                AAAA
              </a>
              <a href="#">
                BBBB
              </a>
              <a href="#">
                CCCC
              </a>
              <a href="#">
                DDDD
              </a>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                EEEE
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="#">aaaa</a></li>
                <li><a className="dropdown-item" href="#">bbbb</a></li>
                <li><a className="dropdown-item" href="#">cccc</a></li>
                <li><a className="dropdown-item" href="#">dddd</a></li>
              </ul>
              </li>
              <a href="#">
                FFFF
              </a>
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  } else { //  --------------------------------------------------- When there is an admin login opportunity 
    return (
      <>
        <div className="conatiner">
          <div className="header">
            
            <a href="/AdminDashboard"><img src={logo} alt="logo" className="logo" /></a>

            <ul className="pages">
              <a href="/AdminDashboard">
                Home
              </a>
              <a href="/Notice">
                Notice
              </a>
              <a href="/AdminUploads">
                Resources
              </a>
              <a href="/AboutUs">
                About
              </a>
              <a href="/ContactUs">
                Contact Us
              </a>
              <a href="#">
                My Profile
              </a>
              <button type="button" class="btn btn-outline-secondary" onClick={logout} style={{marginLeft:"50px"}}><AiOutlineLogin />&nbsp; Logout</button>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Header;
