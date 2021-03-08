import React, { useEffect, useState } from "react";

const TopHeadline = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const url =
      "http://newsapi.org/v2/everything?q=tesla&from=2021-02-08&sortBy=publishedAt&apiKey=0748e6d6fd5f47bc9c137f29179d52f9";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div>
      <h1>Top Head line: {articles.length}</h1>
    </div>
  );
};

export default TopHeadline;
