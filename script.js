const listDiv = document.getElementById("list");
const resetBtn = document.getElementById("resetBtn");
const loader = document.getElementById("loader");

let isLoading = true;
let res;
// function to fetch data

function loading() {
  loader.style.display = "flex";
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
}

async function fetchData() {
  try {
    res = await (
      await fetch("https://jsonplaceholder.typicode.co/users")
    ).json();

    return res;
  } catch (error) {
    return "Error is come";
  }
}

async function render() {
  const data = await fetchData();
  if (typeof data === "object") {
    isLoading = false;
  }
  listDiv.innerHTML = ``;

  if(data = "Error is come") {

    const li = document.createElement("li");
    console.log(data);
    
    li.innerHTML = data;
    listDiv.appendChild(li);

    return;
  }

  data.map((d) => {
    console.log(isLoading);

    const li = document.createElement("li");
    li.innerHTML = d.name;
    listDiv.appendChild(li);
  });
}

resetBtn.addEventListener("click", () => {
  loading();
  render();
});

loading();
render();
