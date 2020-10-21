import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  min-height: calc(100vh - 80px);
  padding-left: 13px;
  padding-top: 80px;
  @media (max-width: 1080px) {
    padding-top: 50px;
  }
`;

export default Article;
