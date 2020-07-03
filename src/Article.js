import React, { useState } from "react";
import {
  ArticleTitle,
  ArticleContainer,
  ArticlePublishedAt,
  ArticleInfo,
  ArticleFooter,
} from "./StyledElements";
const Article = ({
  source,
  title,
  description,
  fullArticleUrl,
  image,
  publishedAt,
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <ArticleContainer>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticlePublishedAt>{publishedAt}</ArticlePublishedAt>
      <ArticleInfo>
        <div>{description}</div>
        <ArticleFooter>
          <div>
            Read full article at <a href={fullArticleUrl}>{source}</a>
          </div>
        </ArticleFooter>
      </ArticleInfo>
    </ArticleContainer>
  );
};

export default Article;
