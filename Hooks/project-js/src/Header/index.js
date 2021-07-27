import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          React Hooks
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className="btn nav-link dropdown-toggle" id="useStateDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                useState
              </button>
              <ul className="dropdown-menu" aria-labelledby="useStateDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/hook-usestate/simple-not-working" activeClassName="active">
                    Simple not working
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/hook-usestate/simple-working" activeClassName="active">
                    Simple working
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/hook-usestate/share-children" activeClassName="active">
                    Share State with Children
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/hook-usestate/share-sibling" activeClassName="active">
                    Share State with Sibling
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/hook-usestate/class-component" activeClassName="active">
                    Class Component
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button className="btn nav-link dropdown-toggle" id="useEffectDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                useEffect
              </button>
              <ul className="dropdown-menu" aria-labelledby="useEffectDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/hook-useeffect/once-without-cleanup" activeClassName="active">
                    Once without Cleanup
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/hook-useeffect/once-with-cleanup" activeClassName="active">
                    Once with Cleanup
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/hook-useeffect/with-dependencies" activeClassName="active">
                    With Dependencies
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/hook-useeffect/on-rerender" activeClassName="active">
                    On Every Re-Render
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/hook-useeffect/all-implementation-in-one-place" activeClassName="active">
                    All Implementation In One Place
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button className="btn nav-link dropdown-toggle" id="useReducerDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                useReducer
              </button>
              <ul className="dropdown-menu" aria-labelledby="useReducerDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/hook-usereducer/simple-working" activeClassName="active">
                    Simple working
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/hook-usereducer/share-children" activeClassName="active">
                    Share State with Children
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/hook-usereducer/share-sibling" activeClassName="active">
                    Share State with Sibling
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="btn nav-link dropdown-toggle" id="usContextDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                useContext
              </button>
              <ul className="dropdown-menu" aria-labelledby="usContextDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/hook-usecontext/simple-working" activeClassName="active">
                    Simple working
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="btn nav-link dropdown-toggle" id="refDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Refs
              </button>
              <ul className="dropdown-menu" aria-labelledby="refDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/ref/class-component" activeClassName="active">
                    Class Component
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ref/functional-component" activeClassName="active">
                    Functional Component
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ref/passing-ref" activeClassName="active">
                    Passing Ref - Class Component
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ref/passing-ref-hoc" activeClassName="active">
                    Passing Ref to React HOC Component
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ref/Uuseimperativehandle" activeClassName="active">
                    UseImperativeHandle
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <button className="btn nav-link dropdown-toggle" id="refDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Pure Component
              </button>
              <ul className="dropdown-menu" aria-labelledby="refDropdown">
                <li>
                  <NavLink className="dropdown-item" to="/pure-component/class-component" activeClassName="active">
                    Class Component
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/pure-component/functional-component" activeClassName="active">
                    Functional Component
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hook-other" activeClassName="active">
                Other Hooks
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
