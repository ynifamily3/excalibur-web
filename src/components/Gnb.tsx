import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Content, NavList } from "./layout";
import { ExcaliburLogo } from "../components/svg";

const GnbWrapper = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  border-bottom: 1px solid #efefef;
  position: fixed;
  background-color: white;
`;

const NavItem = styled.li<{ h?: boolean }>`
  display: flex;
  justify-content: center;
  min-width: 80px;
  height: 80px;
  margin: 0 10px;
  align-items: center;
  height: 100%;
  padding: ${(props) => props.h && "0 30px"};
  background-color: ${(props) => props.h && "rgb(178, 224, 223);"};
`;

const Gnb: React.FC = () => {
  return (
    <GnbWrapper>
      <Content style={{ paddingLeft: "15px" }}>
        <Link to="/" style={{ textDecoration: "none", height: "74px" }}>
          <ExcaliburLogo width="200" height="74" />
        </Link>
        <NavList>
          <NavItem>엑스칼리버 소개</NavItem>
          <NavItem>공지사항</NavItem>
          <NavItem h={true}>고객센터</NavItem>
        </NavList>
      </Content>
    </GnbWrapper>
  );
};

export default Gnb;
