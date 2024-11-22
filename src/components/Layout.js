import "./dashboard.css";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";

const Layout = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
          <div
            className="offcanvas-md offcanvas-end bg-body-tertiary"
            tabIndex={-1}
            id="sidebarMenu"
            aria-labelledby="sidebarMenuLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="sidebarMenuLabel">
                Company name
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                data-bs-target="#sidebarMenu"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? "nav-link d-flex align-items-center gap-2 active"
                        : "nav-link d-flex align-items-center gap-2"
                    }
                    aria-current="page"
                    to="/"
                  >
                    <FaHome />
                    Danh sách sinh viên
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? "nav-link d-flex align-items-center gap-2 active"
                        : "nav-link d-flex align-items-center gap-2"
                    }
                    to="/add-student"
                  >
                    <CiFileOn /> Thêm mới sinh viên
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? "nav-link d-flex align-items-center gap-2 active"
                        : "nav-link d-flex align-items-center gap-2"
                    }
                    to="/about"
                  >
                    <CiFileOn /> About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
