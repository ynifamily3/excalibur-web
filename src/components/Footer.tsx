import React from "react";
import { Content, NavList } from "./layout";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 80px;
  position: relative;
  background-color: rgb(238, 238, 238);
`;

const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Content style={{ paddingLeft: "13px" }}>
        <NavList style={{ justifyContent: "flex-start" }}>
          <NavItem>
            <Link to="/privacy">개인정보처리방침</Link>
          </NavItem>
        </NavList>
      </Content>
    </FooterWrapper>
  );
};

export default Footer;
