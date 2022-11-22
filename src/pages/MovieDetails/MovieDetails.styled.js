import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ImgPoster = styled.img`
  width: 180px;
  object-fit: cover;
`;

export const Movie = styled.div`
  display: flex;
  padding: 20px 0;
  height: 100%;
`;

export const Description = styled.div`
  display: flex;
`;

export const Content = styled.div`
  margin-left: 20px;
`;

export const Genres = styled.span`
  font-size: 12px;
  font-weight: 500;
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

export const Link = styled(NavLink)`
  padding: 2px 4px;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  background-color: wheat;
  font-size: 12px;
  font-weight: 300;
`;
