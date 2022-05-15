import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function ExpandMenu({ routes }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <li className=" nav-item  ">
      <div className="parent_menu">
        <span  onClick={toggleMenu} className="nav-link text-dark cursor-pointer">{routes.name}</span>
      </div>
      <ul className={`${isMenuOpen && "d-none"}`}>
        {routes.subRoutes.map((subRoute) => {
          return (
            <li key={subRoute.name} className="nav-link">
              <Link
                className="nav-item text-dark text-decoration-none"
                to={subRoute.link}
              >
                {subRoute.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
}
