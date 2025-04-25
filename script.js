const nameDiv = document.getElementById("name");

let isLoading = true;
let res;
// function to fetch data

async function fetchData() {
  res = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();
  console.log(res);
  
  return res;
}


fetchData();

