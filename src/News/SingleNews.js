import React from "react";
import { useState, useEffect } from "react";
import "./SingleNews.css";

const SingleNews = () => {
  const [inputValue, setInputValue] = useState("tesla");
  const [value, setValue] = useState("");
  const [news, setNews] = useState("");

  async function fetchData() {
    const api = `https://newsapi.org/v2/everything?q=${inputValue}&from=2023-01-12&sortBy=publishedAt&apiKey=e760663cfc8640aca3ae89145811da3d`;
    const data = await fetch(api);
    const response = await data.json();
    // console.log(response);
    setNews(response.articles);
  }

  useEffect(() => {
    fetchData();
  }, [inputValue]);
  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setInputValue(value);
          }}
        />
      </form>
      {console.log(news)}
      {console.log(inputValue)}

      <div className="newsdata">
        {news &&
          news.map((news) => {
            return (
              <>
                <div className="title">
                  <h2>{news.title}</h2>
                  <img src={news.urlToImage} alt={news.title} />
                  <p>{news.description}</p>
                  <p>PublishedAt:{news.publishedAt}</p>
                  <p>
                    <button>
                      {" "}
                      <a href={news.url}>ReadMore</a>
                    </button>
                  </p>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default SingleNews;
