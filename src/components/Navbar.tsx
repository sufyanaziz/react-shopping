import React from "react";

import styled from "styled-components";

interface Props {
  className?: string;
  style?: React.CSSProperties | undefined;
}

const Navbar: React.FC<Props> = ({ children, className, style }) => {
  return (
    <NavbarStyled className={className} style={style}>
      {children}
    </NavbarStyled>
  );
};

export default Navbar;

const NavbarStyled = styled.div`
  padding: 20px 2rem;
  display: flex;
  color: #eee;
  align-items: center;
  position: sticky;
  top: 0;
  background: #222831;

  h2 {
    margin-right: auto;
  }

  .navbar-icon-div {
    position: relative;
  }

  .badge {
    position: absolute;
    right: -8px;
    top: -10px;
    background: red;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .navbar-icon {
    cursor: pointer;
    font-size: 25px;
  }
`;
