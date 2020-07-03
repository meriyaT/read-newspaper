import styled from "@emotion/styled";
import { typeScale } from "./utils";

export const NewsPaperFrontpage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: FLORALWHITE;
`;

export const NewsPaperHeading = styled.h1`
  text-align: center;
  font-family: "Engagement", cursive;
  font-size: ${typeScale.header1};
  border-bottom: 3px solid black;
  padding-bottom: 10px;
  margin-bottom: 0;
`;

export const MainPaperLayout = styled.div`
  width: 100%;
`;

export const ArticleLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  border-bottom: 3px solid black;
  border-left: 1px solid black;
`;

export const CategoryLayout = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 0;
  margin: 0;
  width: 75%;
`;

export const Category = styled.li`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: ${(props) =>
    props.politics
      ? "#ffeaa7"
      : props.technology
      ? "#81ecec"
      : props.local
      ? "#55efc4"
      : props.sports
      ? "#a29bfe"
      : "#74b9ff"};
`;

export const CategoryLink = styled.a`
  text-decoration: none;
  padding-left: 34px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 30px;
  font-weight: bold;
  font-family: "Futura";
  cursor: pointer;
`;

export const ArticleRow = styled.section`
  display: flex;
  align-items: stretch;
  width: 100%;
  border-bottom: 3px solid black;
  border-left: 1px solid black;
`;

export const ArticleContainer = styled.article`
  display: flex;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  font-family: "Roboto", sans-serif;
  border-right: 1px solid black;
  padding: 0 10px;
`;

export const ArticleTitle = styled.h2`
  align-self: center;
  font-family: "Oswald", sans-serif;
  font-size: header1;
`;

export const ArticlePublishedAt = styled.div`
  align-self: flex-end;
`;

export const ArticleInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArticleFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding-top: 10px;
`;
