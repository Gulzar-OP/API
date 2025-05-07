const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const button = document.getElementById("getQuote");

button.addEventListener("click", getQuote);

function getQuote() {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      quoteText.innerText = `"${data.content}"`;
      authorText.innerText = `— ${data.author}`;
    })
    .catch(error => {
      quoteText.innerText = "Failed to fetch quote.";
      authorText.innerText = "";
      console.error("Error fetching quote:", error);
    });
}
