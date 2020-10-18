import React from "react";
import Gnb from "../Gnb";
import Footer from "../Footer";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  min-height: calc(100vh - 160px);
  padding-left: 13px;
  padding-top: 100px;
`;

const H1 = styled.h1`
  margin: 0;
  padding: 10px 0;
`;

const H2 = styled.h2``;

const Privacy = (): JSX.Element => {
  return (
    <>
      <Gnb />
      <Article>
        <H1>개인정보보호정책</H1>
        <H2>제1조 (개인정보의 처리 목적)</H2>
        <H2>제2조 (개인정보의 처리 및 보유 기간)</H2>
        <H2>제3조 (개인정보의 제3자 제공)</H2>
        <H2>제4조 (개인정보처리 위탁)</H2>
        <H2>제5조 (고객의 권리·의무 및 그 행사방법)</H2>
        <H2>제6조 (처리하는 개인정보의 항목)</H2>
        <H2>제7조 (행태정보의 관리)</H2>
        <H2>제8조 (개인정보 자동 수집 장치의 설치, 운영 및 거부 관련사항)</H2>
        <H2>제9조 (개인정보의 파기절차 및 파기방법)</H2>
        <H2>제10조 (개인정보의 안전성 확보 조치)</H2>
        <H2>제11조 (개인정보 처리방침의 변경)</H2>
        <H2>제12조 (권익침해 구제방법)</H2>
        <H2>제13조 (개인정보 보호 책임자)</H2>
        <H2>제14조 (개인정보처리방침 변경 내역)</H2>
        <p>
          개인정보처리방침 버전번호 : Ver 1.0
          <br />
          개인정보처리방침 시행일자 : 2020.08.05
        </p>
      </Article>
      <Footer />
    </>
  );
};

export default Privacy;
