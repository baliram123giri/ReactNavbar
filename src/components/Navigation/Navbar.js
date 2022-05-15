import React from "react";
import { Link } from "react-router-dom";
import { navRoutes } from "./const";
import Menu from "./Menu";

export default function Navbar({ toggleDrawer }) {
  console.log(navRoutes);
  return (
    <div className="container-fluid bg-primary ">
      <div className="container">
        <nav>
          <div className="row">
            <div className="col-3 col-md-2">
              <div className="logo">
                <Link
                  to="/"
                  className="text-decoration-none text-white fs-3 fw-bold"
                >
                  LOGO
                </Link>
              </div>
            </div>
            <div className="col-8 col-md-10 d-flex">
              <ul className="nav ms-auto nav-items">
                {navRoutes.map((data, index) => {
                  if (data.subRoutes) {
                    return <Menu routes={data} key={data.name} />;
                  }
                  return (
                    <li className="nav-item" key={index}>
                      <Link className="nav-link text-white" to={data.link}>
                        {data.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="nav ms-auto login">
                <li className="nav-item">
                  <Link to={"/login"} className="btn btn-danger">
                    Login
                  </Link>
                </li>
              </ul>
              <div className="menu ms-auto">
                <img
                  onClick={toggleDrawer}
                  src="./img/menu.png"
                  className="cursor-pointer "
                  width={35}
                  alt=""
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
