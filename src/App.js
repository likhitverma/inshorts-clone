import axios from "axios";
import { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import NewsContent from "./components/NewsContent/NewsContent";
import apiKey from "./data/config";
import Footer from "./components/Footer/Footer";
function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(10);
  const newsApi = async () => {
    try {
      const proxyURL = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `https://${proxyURL}newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}&pagesize=${loadMore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(newsArray);
  console.log(category);
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadMore]);
  return (
    <div className="App">
      <NavigationBar setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        setLoadMore={setLoadMore}
        loadMore={loadMore}
      />
      <Footer />
    </div>
  );
}

export default App;
