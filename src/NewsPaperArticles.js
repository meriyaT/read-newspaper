import React, { useEffect } from "react";
import Article from "./Article";
import LoadingArtcle from "./LoadingArticle";
import Categories from "./Categories";
import { MainPaperLayout, ArticleLayout } from "./StyledElements";
const NewsPaperArticles = ({ isLoading, articles, onCategoryChange }) => {
  let lastArticle = articles[3];
  return (
    <div>
      {isLoading ? (
        <MainPaperLayout>
          <ArticleLayout>
            <LoadingArtcle />
            <LoadingArtcle />
            <LoadingArtcle />
          </ArticleLayout>
          <ArticleLayout>
            <LoadingArtcle />
            <Categories />
          </ArticleLayout>
        </MainPaperLayout>
      ) : (
        <MainPaperLayout>
          <ArticleLayout>
            {articles.slice(0, 3).map((article) => {
              let publishedAtDate = new Date(
                article.publishedAt
              ).toDateString();
              return (
                <Article
                  key={article.title}
                  title={article.title}
                  description={article.description}
                  fullArticleUrl={article.url}
                  image={article.urlToImage}
                  publishedAt={publishedAtDate}
                  source={article.source.name}
                />
              );
            })}
          </ArticleLayout>
          <ArticleLayout>
            <Article
              key={lastArticle.title}
              title={lastArticle.title}
              description={lastArticle.description}
              fullArticleUrl={lastArticle.url}
              image={lastArticle.urlToImage}
              publishedAt={new Date(lastArticle.publishedAt).toDateString()}
              source={lastArticle.source.name}
            />
            <Categories onCategoryChange={onCategoryChange} />
          </ArticleLayout>
        </MainPaperLayout>
      )}
    </div>
  );
};

export default NewsPaperArticles;
