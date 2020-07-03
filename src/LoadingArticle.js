import React from "react";
import {
  ArticleContainer,
  ArticleTitle,
  ArticlePublishedAt,
  ArticleInfo,
  ArticleFooter,
} from "./StyledElements";

const LoadingArticle = () => {
  let hero = "http://placecorgi.com/300/300";

  return (
    <ArticleContainer>
      <ArticleTitle>Title loading..</ArticleTitle>
      <ArticlePublishedAt>published at ..</ArticlePublishedAt>
      <ArticleInfo>
        <div>
          <img src={hero} />
        </div>
        <div>Description loading..</div>
        <ArticleFooter>
          <div>Read full article at blah!..</div>
          <div>Source is loading..</div>
        </ArticleFooter>
      </ArticleInfo>
    </ArticleContainer>
  );
};

export default LoadingArticle;
