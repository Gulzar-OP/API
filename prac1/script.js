// const url = "https://api.openweathermap.org/data/2.5/weather?q=katihar&appid=89519b409f787da91fcbc5a5379d73aa";


// const getdata = async() =>{
//     console.log("getting data...")
//     let response = await fetch(url);
//     console.log(response)
// }

// fetch("https://api.openweathermap.org/data/2.5/weather?q=katihar&appid=89519b409f787da91fcbc5a5379d73aa")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error("There was a problem with the fetch operation:", error));


// Replace YOUR_API_KEY with your actual API key from OpenWeather
const apiKey = "89519b409f787da91fcbc5a5379d73aa";
const city = "katihar";

// Full API URL
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Temperature data from API response
    const temperature = data.main.temp;
    const f=data.main.feels_like;
    const alldata = data.main;

    // HTML element jahan hum data dikhayenge
    const tempElement = document.getElementById("temp");
    const feel_like = document.getElementById("feel");
    const All =document.getElementById("data");

    // Data ko HTML mein show karo
    tempElement.innerText = `Current temperature in ${city}: ${temperature}°C`;
    feel_like.innerHTML=`Temperature Feel like ${f}`
    All.innerHTML=`Data ${alldata }`
  })
  .catch(error => {
    console.error("Error fetching weather data:", error);
  });
