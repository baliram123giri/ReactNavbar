import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ routes }) {
  return (
    <>
      <li className="submenus nav-item position-relative ">
        <div className="parent_menu">
          <Link className="nav-link text-white" to={routes.link}>
            {routes.name}
          </Link>
        </div>
        <ul className="sub_routes position-absolute bg-white shadow p-0 top-100 d-non">
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
    </>
  );
}
