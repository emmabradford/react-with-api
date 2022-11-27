import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./navBarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/avatars" activeStyle>
            Avatars
          </NavLink>
          <NavLink to="/bending" activeStyle>
            Bending
          </NavLink>
          <NavLink to="/Locations" activeStyle>
            Locations
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;