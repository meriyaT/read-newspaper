import React, { useEffect, useState } from "react";
import NewsPaperArticles from "./NewsPaperArticles";
import Heading from "./Heading";
import { NewsPaperFrontpage } from "./StyledElements";

const NewsPaper = () => {
  const [articles, setArticles] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  };

  const fetchArticlesByCategory = async (event) => {
    let category = event.target.parentElement.dataset.item;
    if (!category) {
      category = event.target.dataset.item;
    }
    const articleCollection = await fetchData(getUrlWithCategory(category));
    setArticles(articleCollection);
    setIsLoading(false);
  };

  const fetchInitialArticles = async () => {
    const article1 = await fetchData(getUrlWithSource("associated-press"));
    const article2 = await fetchData(getUrlWithSource("the-washington-post"));
    const article3 = await fetchData(
      getUrlWithSource("the-wall-street-journal")
    );
    const article4 = await fetchData(getUrlWithSource("bbc-news"));
    let articleCollection = [];
    articleCollection.push(article1[0]);
    articleCollection.push(article2[0]);
    articleCollection.push(article3[0]);
    articleCollection.push(article4[0]);
    setArticles(articleCollection);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchInitialArticles();
  }, []);

  const getUrlWithSource = (source) => {
    return `https://newsapi.org/v2/top-headlines?sources=${source}&pageSize=1&apiKey=b455385fba194e5cb69a3bf8395d6926`;
  };

  const getUrlWithCategory = (category) => {
    return `https://newsapi.org/v2/top-headlines?country=${category}&pageSize=4&apiKey=b455385fba194e5cb69a3bf8395d6926`;
  };

  return (
    <NewsPaperFrontpage>
      <Heading />
      <NewsPaperArticles
        isLoading={isLoading}
        articles={articles}
        onCategoryChange={fetchArticlesByCategory}
      />
    </NewsPaperFrontpage>
  );
};

export default NewsPaper;
