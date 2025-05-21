const url = "https://newsapi.org/v2/everything?q=tesla&from=2025-04-07&sortBy=publishedAt&apiKey=119d4bff1e9b4f9998c7ac886e0ea610";

fetch(url)
  .then(response => response.json())
  .then(data => {
    // console.log(data);
    const content = document.getElementsByClassName("data")[0];

    data.articles.slice(0, 100).forEach(article => {
      const newsItem = document.createElement("div");
      newsItem.classList.add("news-card");

      newsItem.innerHTML = `
        <h3>${article.title}</h3>
        <p><strong>Author:</strong> ${article.author || "Unknown"}</p>
        <p>${article.description || "No description"}</p>
        ${article.urlToImage ? `<img src="${article.urlToImage}" width="300" />` : ""}
        <p><a href="${article.url}" target="_blank">Read more</a></p>
        <hr/>
      `;

      content.appendChild(newsItem);
    });
  })
  .catch(error => {
    console.error("Error fetching news data:", error);
  });
