// on click function

document.getElementById("load__user").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => loadUser(data));
});

// load user function

const loadUser = (data) => {
  const userContainer = document.getElementById("user__container");
  for (const user of data) {
    console.log(user);
    const div = document.createElement("div");
    div.classList.add("single__user");
    div.innerHTML = `
                <h2> Roll: ${user.id}</h2>
                <h3> Name: ${user.name}</h3>
                <h4> Roll: ${user.username}</h4>
                <h5> Email: ${user.email}</h5>
                <h5> Phone: ${user.phone}</h5>
                <h5> Website: ${user.website}</h5>
    `;
    userContainer.appendChild(div);
  }
};
