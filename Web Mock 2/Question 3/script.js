const skeletonLoader = document.querySelector(".skeletonLodder");
let showFetchData = document.getElementById("showFetchData");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    skeletonLoader.style.display = "none";

    data.forEach((person) => {
      const div = document.createElement("div");
      div.className = "data";
      div.innerText = `Name: ${person.name}  Email: ${person.email}`;
      showFetchData.appendChild(div);
    });
  })
  .catch((err) => {
    console.log("Error While Fetching Data", err);
  });
