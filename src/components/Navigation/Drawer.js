import React from "react";
import { Link } from "react-router-dom";
import { navRoutes } from "./const";
import ExpandMenu from "./ExpandMenu";

export default function Drawer({ toggleDrawer, isOpen }) {
  return (
    <>
      {isOpen && <div className="backDrop" onClick={toggleDrawer}></div>}
      <div className={`drawer ${!isOpen && "activeTransition"}`}>
        <ul className="nav flex-column ">
          {navRoutes.map((data, index) => {
              if(data.subRoutes){
                  return <ExpandMenu routes={data} key={data.name}/>
              }
            return (
              <li className="nav-item" key={index}>
                <div onClick={toggleDrawer}>
                  <Link className="nav-link text-dark " to={data.link}>
                    {data.name}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="login_btn ms-3">
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
        </div>
      </div>
    </>
  );
}
