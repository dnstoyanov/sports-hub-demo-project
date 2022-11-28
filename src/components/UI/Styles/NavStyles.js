import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonGroupLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const UserDropdownLink = styled(Link)`
  text-decoration: none;
  color: #222;

  &:hover {
    color: #d72130;
  }
`;

export const MenuButtonsLink = styled(Link)`
  text-decoration: none;
  width: 205px;
  color: #b2b2b2;
  font-size: 15px;
  font-weight: 700;
  text-align: left;
  margin-top: 5px;
  justify-content: flex-start;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    color: #7f7b7b;
    background: #fafafa;
  }

  &:focus {
    color: #d72130;
  }

  &:active {
    color: #d72130;
  }
`;
