import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  height: 40px;
  align-items: center;
  padding: 10px 0;
  /* border-bottom: 2px solid black; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Navlink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;
