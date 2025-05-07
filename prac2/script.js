fetch("https://jsonplaceholder.typicode.com/albums")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    const test = document.getElementById("test");

    // Loop through data array
    data.forEach(album => {
      const listItem = document.createElement("li");
      listItem.innerText = `Album ID: ${album.id}, Title: ${album.title}, User ID: ${album.userId}`;
      test.appendChild(listItem);
    });
  })
  .catch(error => console.error("There was a problem with the fetch operation:", error));
