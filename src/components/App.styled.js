import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Section = styled.div``;

export const Header = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  height: 40px;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
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
