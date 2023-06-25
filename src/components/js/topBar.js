import React, {useState} from "react";
import '../css/topBar.css'
import { useLocation } from "react-router-dom/dist";
import { Link } from "react-router-dom/dist";

export default function TopBar() {

    const [isExpanded, setIsExpanded] = useState(false);
    const location = useLocation();
    const currentUrl = location.pathname;


    return (
      <div className="topBar">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div className="topBarHeader">
              <img
                className="logoImg"
                src={require("../../resources/pngaaa.com-299137.png")}
                alt="logo"
                width="60"
                height="50"
                class="d-inline-block align-text-top"
              />
              <h1 className="logoHeader">Copilot</h1>
            </div>

            {/* expand and collapse button */}
            <button
            onClick={() => setIsExpanded(!isExpanded)}
              class="navbar-toggler bg-body-tertiary buttonTest"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* epand and collapse button */}

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className={(isExpanded)? "navbar-nav ml-auto clicked" : "navbar-nav ml-auto"}>
                <Link to='/dashboard'>
                <li class="nav-item">
                  <button className={currentUrl === '/dashboard'? "nav-link selected" : 'nav-link'}>Dashboard</button>
                </li>
                </Link>
                <Link to='/map'>
                <li class="nav-item">
                    <button className={currentUrl === '/map'? "nav-link selected" : 'nav-link'}>Map</button>
                </li>
                </Link>
                <Link to='/data'>
                <li class="nav-item">
                  <button className={currentUrl === '/data'? "nav-link selected" : 'nav-link'}>Data</button>
                </li>
                </Link>
                <Link to='/model'>
                <li class="nav-item">
                  <button className={currentUrl === '/model'? "nav-link selected" : 'nav-link'}>New Model</button>
                </li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}
