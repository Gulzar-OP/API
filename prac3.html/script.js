fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Not ok")
        }
        return response.json();

    })
    // .then(response => response.json())
    .then(data => {
        const asss = data[0].name;
        const name = document.getElementById("name");

        data.forEach(element => {
            const names = document.createElement("div");
            names.classList.add("user-card");
            names.innerHTML = `
            <p><strong>Name:</strong> ${element.name}</p>
            <p><strong>Username:</strong> ${element.username}</p>
            <p><strong>Email:</strong> ${element.email}</p>
        <p><strong>Address:</strong> ${element.address.street}, ${element.address.city}</p>
        `;

            name.appendChild(names);

        });
    })
