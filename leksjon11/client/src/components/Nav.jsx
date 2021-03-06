import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  padding: 0 20px;
  align-items: center;
`;

const NavMenuItem = styled.li`
  padding: 0 20px;
  &:first-child {
    padding-left: 0;
  }
  & > a {
    color: #333;
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;

    &.active {
      color: #007b5f;
      border-bottom: 4px solid #007b5f;
    }
  }
`;

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/createuser" activeClassName="active">
          Create user
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/createpoll">
          Create poll
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink exact to="/results" activeClassName="active">
          Results
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
