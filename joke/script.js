const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("joke");

jokeBtn.addEventListener("click", getJoke);

function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      const joke = `${data.setup} 🤔 ${data.punchline}`;
      jokeText.innerText = joke;
    })
    .catch(err => {
      jokeText.innerText = "Oops! Joke API not working 😅";
      console.error(err);
    });
}


// const url = "https://official-joke-api.appspot.com/random_joke";
// const getJoke = async () =>{
//   let response = await fetch(url);
//   console.log(response);
//   // response.json();
//   let data = await response.json();
//   console.log(data);
// }