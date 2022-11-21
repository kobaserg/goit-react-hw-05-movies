import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ImgPoster = styled.img`
  width: 150px;
`;

export const Movie = styled.div`
  padding: 20px 0;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const NavMovie = styled(NavLink)`
  display: flex;
  flex-direction: column;
  width: 100px;
`;

export const NavMovieItem = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 14px;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;
