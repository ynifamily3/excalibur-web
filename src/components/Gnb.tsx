import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Content, NavList } from "./layout";
import { ExcaliburLogo, MenuIcon } from "../components/svg";
import { useMediaQuery } from "beautiful-react-hooks";
import { useModal } from "../hooks";

const GnbWrapper = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  border-bottom: 1px solid #efefef;
  position: fixed;
  background-color: white;
  @media (max-width: 1080px) {
    height: 50px;
  }
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

const MenuIconButton = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
  }
`;

const Gnb: React.FC = () => {
  const isSmall = useMediaQuery("(max-width: 1080px)");
  const { setAndOpen } = useModal();
  return (
    <GnbWrapper>
      <Content
        style={{
          paddingLeft: "15px",
          display: "flex",
          justifyContent: !isSmall ? "center" : "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            width: "200px",
            height: !isSmall ? "74px" : "50px",
          }}
        >
          <ExcaliburLogo width="200" height={!isSmall ? "74" : "50"} />
        </Link>
        {!isSmall ? (
          <NavList>
            <NavItem>엑스칼리버 소개</NavItem>
            <NavItem>공지사항</NavItem>
            <NavItem h={true}>고객센터</NavItem>
          </NavList>
        ) : (
          <MenuIconButton
            onClick={() => {
              setAndOpen(<div>hi!</div>);
            }}
          >
            <MenuIcon />
          </MenuIconButton>
        )}
      </Content>
    </GnbWrapper>
  );
};

export default Gnb;
