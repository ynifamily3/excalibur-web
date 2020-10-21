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
        <P>인트로를 새로 했습니다. &gt;ㅁ&lt;</P>
        <P>
          Excalibur는 SwordMaster에서 개발한, 화상강의 집중력 향상 솔루션입니다.
        </P>
      </Article>
      <Footer />
    </>
  );
};

export default Intro;
