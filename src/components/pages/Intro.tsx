import React from "react";
import Gnb from "../Gnb";
import Footer from "../Footer";
import styled from "styled-components";
import { Article } from "../layout";

const P = styled.p`
  margin: 0;
  padding: 10px 0;
`;

const Intro = (): JSX.Element => {
  return (
    <>
      <Gnb />
      <Article>
        <P>안녕하세요, Excalibur입니다.</P>
      </Article>
      <Footer />
    </>
  );
};

export default Intro;
