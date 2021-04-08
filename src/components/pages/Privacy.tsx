import React from "react";
import Gnb from "../Gnb";
import Footer from "../Footer";
import styled from "styled-components";
import { Article } from "../layout";

const H1 = styled.h1``;

const H2 = styled.h2`
  margin-top: 100px;
`;

const P = styled.p<{ color?: string; indent?: number }>`
  word-wrap: normal;
  color: ${(props) => {
    return props.color ? props.color : "#333";
  }};
  font-size: 16px;
  line-height: 32px;
  margin-left: ${({ indent }) => {
    return indent! * 16 + "px";
  }};
`;

const Privacy = (): JSX.Element => {
  return (
    <>
      <Gnb />
      <Article
        style={{
          paddingLeft: "13px",
          paddingRight: "13px",
          paddingTop: "130px",
        }}
      >
        <H1>개인정보보호정책</H1>
        <H2>제1조 (개인정보의 처리 목적)</H2>
        <P>
          SwordMaster(이하 “소드마스터”라 합니다)는 다음의 목적을 위하여
          개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
          용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보
          보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할
          예정입니다.
        </P>
        <P indent={1}>
          1. 홈페이지 회원 가입 및 관리 회원 가입의사 확인, 회원제 서비스 제공에
          따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제 시행에 따른
          본인확인, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리시
          법정대리인의 동의여부 확인, 각종 고지․통지, 고충처리 등을 목적으로
          개인정보를 처리합니다.
        </P>
        <P indent={1}>
          2. 재화 또는 서비스 제공 물품배송, 서비스 제공, 계약서․청구서 발송,
          콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금결제․정산,
          채권추심 등을 목적으로 개인정보를 처리합니다.
        </P>
        <P indent={1}>
          3. 고충처리 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한
          연락․통지, 처리결과 통보 등의 목적으로 개인정보를 처리합니다.
        </P>
        <P indent={1}>
          4. 해당 사업자/단체의 개인정보 처리업무 개인정보 처리업무에 따른
          처리목적으로 개인정보를 처리합니다.
        </P>
        <H2>제2조 (개인정보의 처리 및 보유 기간)</H2>
        <P>
          ① 소드마스터는 법령에 따른 개인정보 보유․이용기간 또는 정보주체로부터
          개인정보를 수집시에 동의받은 개인정보 보유․이용기간 내에서 개인정보를
          처리․보유합니다.
        </P>
        <P>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</P>
        <P indent={1}>
          1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴시까지 다만,
          다음의 사유에 해당하는 경우에는 해당 사유 종료시까지
        </P>
        <P indent={2}>
          1) 관계 법령 위반에 따른 수사․조사 등이 진행중인 경우에는 해당
          수사․조사 종료시까지
        </P>
        <P indent={2}>
          2) 홈페이지 이용에 따른 채권․채무관계 잔존시에는 해당 채권․채무관계
          정산시까지
        </P>
        <P indent={2}>3) 예외 사유 시에는 5년 까지</P>
        <P indent={1}>
          2. 재화 또는 서비스 제공 : 재화․서비스 공급완료 및 요금결제․정산
          완료시까지 다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료시까지
        </P>
        <P indent={2}>
          1) 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시․광고,
          계약내용 및 이행 등 거래에 관한 기록 <br />- 표시․광고에 관한 기록 :
          6개월 <br />- 계약 또는 청약철회, 대금결제, 재화 등의 공급기록 : 5년
          <br /> - 소비자 불만 또는 분쟁처리에 관한 기록 : 3년
        </P>
        <P indent={2}>
          2) 「통신비밀보호법」제41조에 따른 통신사실확인자료 보관 <br />-
          가입자 전기통신일시, 개시․종료시간, 상대방 가입자번호, 사용도수,
          발신기지국 위치추적자료 : 1년 <br />- 컴퓨터통신, 인터넷 로그기록자료,
          접속지 추적자료 : 3개월
        </P>
        <P indent={2}>
          3) 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」시행령 제29조에
          따른 본인확인정보 보관 : 게시판에 정보 게시가 종료된 후 6개월
        </P>
        <P indent={2}>4) `개인정보 보유기간 근거법령 및 조문` :`보유기간`</P>
        <P indent={1}>3. `개인정보 처리업무` : `보유기간`</P>
        <H2>제3조 (개인정보의 제3자 제공)</H2>
        <P>
          ① `사업자/단체명`은(는) 정보주체의 개인정보를 제1조(개인정보의 처리
          목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의
          특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만
          개인정보를 제3자에게 제공합니다.
        </P>
        <P>
          ② `사업자/단체명`은(는) 다음과 같이 개인정보를 제3자에게 제공하고
          있습니다.
        </P>
        <P indent={1}>
          1. OOO 신용카드사 (업무제휴사)
          <br />- 개인정보를 제공받는 자 : (주) OOO 카드
          <br />- 제공받는 자의 개인정보 이용목적 : 이벤트 공동개최 등 업무제휴
          및 제휴 신용카드 발급
          <br />- 제공하는 개인정보 항목 : 성명, 주소, 전화번호, 이메일주소,
          카드결제계좌정보, 신용도정보
          <br />- 제공받는 자의 보유․이용기간 : 신용카드 발급계약에 따른
          거래기간동안
        </P>
        <P indent={1}>
          2. OOO사
          <br /> - 개인정보를 제공받는 자 : `제공받는 자의 법인명 또는 명칭` -
          제공받는 자의 개인정보 이용목적 : `구체적 이용목적` <br />- 제공하는
          개인정보 항목 : `각 항목` <br />- 제공받는 자의 보유․이용기간 :
          `OO시까지` 또는 `0년`
        </P>
        <H2>제4조 (개인정보처리 위탁)</H2>
        <H2>제5조 (고객의 권리·의무 및 그 행사방법)</H2>
        <H2>제6조 (처리하는 개인정보의 항목)</H2>
        <H2>제7조 (개인정보의 파기절차 및 파기방법)</H2>
        <H2>제8조 (개인정보 보호책임자)</H2>
        <H2>제9조 (개인정보 처리방침의 변경)</H2>
        <H2>제10조 (개인정보의 안전성 확보조치)</H2>
        <H2>제11조 (개인정보 보호 책임자)</H2>
        <H2>
          제12조 (개인정보 자동 수집 장치의 설치 ∙ 운영 및 그 거부에 관한 사항)
        </H2>
        <p>
          개인정보처리방침 버전번호 : Ver 1.0
          <br />
          개인정보처리방침 시행일자 : 2020.10.18
        </p>
      </Article>
      <Footer />
    </>
  );
};

export default Privacy;