import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default function Header(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-5">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="hooks-react-bootstrap">
          <Nav>
            <NavDropdown title="useState" id="useStateDropdown" active={pathname.startsWith('/hook-usestate')}>
              <NavDropdown.Item as={NavLink} to="/hook-usestate/simple-not-working" activeClassName="active">
                Simple not working
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hook-usestate/simple-working" activeClassName="active">
                Simple working
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hook-usestate/share-children" activeClassName="active">
                Share State with Children
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hook-usestate/share-sibling" activeClassName="active">
                Share State with Sibling
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hook-usestate/class-component" activeClassName="active">
                Class Component
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="useEffect" id="useStateDropdown" active={pathname.startsWith('/hook-useeffect')}>
              <NavDropdown.Item as={NavLink} to="/hook-useeffect/once-without-cleanup" activeClassName="active">
                Once without Cleanup
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hook-useeffect/once-with-cleanup" activeClassName="active">
                Once with Cleanup
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hook-useeffect/with-dependencies" activeClassName="active">
                With Dependencies
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hook-useeffect/on-rerender" activeClassName="active">
                On Every Re-Render
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hook-useeffect/all-implementation-in-one-place" activeClassName="active">
                All Implementation In One Place
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="useReducer" id="useReducerDropdown" active={pathname.startsWith('/hook-usereducer')}>
              <NavDropdown.Item as={NavLink} to="/hook-usereducer/simple-working" activeClassName="active">
                Simple working
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hook-usereducer/share-children" activeClassName="active">
                Share State with Children
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/hook-usereducer/share-sibling" activeClassName="active">
                Share State with Sibling
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="useContext" id="usContextDropdown" active={pathname.startsWith('/hook-usecontext')}>
              <NavDropdown.Item as={NavLink} to="/hook-usecontext/simple-working" activeClassName="active">
                Simple working
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Refs" id="refDropdown" active={pathname.startsWith('/ref')}>
              <NavDropdown.Item as={NavLink} to="/ref/class-component" activeClassName="active">
                Class Component
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/ref/functional-component" activeClassName="active">
                Functional Component
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/ref/passing-ref" activeClassName="active">
                Passing Ref to React Component
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/ref/passing-ref-hoc" activeClassName="active">
                Passing Ref to React HOC Component
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/ref/Uuseimperativehandle" activeClassName="active">
                UseImperativeHandle
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pure Component" id="pureDropdown" active={pathname.startsWith('/pure-component')}>
              <NavDropdown.Item as={NavLink} to="/pure-component/class-component" activeClassName="active">
                Class Component
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/pure-component/functional-component" activeClassName="active">
                Functional Component
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/hook-other" activeClassName="active">
              Other Hooks
            </Nav.Link>
            <Nav.Link as={NavLink} to="/hook-custom" activeClassName="active">
              Custom Hooks
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
