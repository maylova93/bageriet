import { useEffect, useState } from "react";
import styles from "./Newsletter.module.scss";

export function Newsletter() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://api.mediehuset.net/bakeonline/news")
      .then((response) => response.json())
      .then((data) => {
        // Sortér og vælg de seneste tre nyheder
        const latestNews = data.items.slice(0, 3);
        setNews(latestNews);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <section className={styles.newsletter}>
      <h2>Vi skaber lækkert!brød</h2>
      <p className={styles.subText}>
        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, <br /> 
        når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud
      </p>

      <div className={styles.newsContainer}>
        {news.map((item) => (
          <div key={item.id} className={styles.newsCard}>
            <img src={item.image} alt={item.title} className={styles.newsImage} />
            <h3 className={styles.newsTitle}>{item.title}</h3>
            <p className={styles.newsTeaser}>{item.teaser}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
