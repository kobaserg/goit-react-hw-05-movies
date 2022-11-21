import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavFilmItem = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  :hover,
  :focus {
    color: orangered;
  }
`;

export const ListFilm = styled.ul`
  padding-left: 0;
`;

export const ItemFilm = styled.li`
  margin: 5px 0;
`;
