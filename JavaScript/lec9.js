const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    factPara.innerText = "Loading...";
    try {
        console.log("Fetching data from API...");
        let response = await fetch(URL);
        console.log("Response object:", response);
        let data = await response.json();
        console.log("Data received:", data);
        factPara.innerText = data.fact;   // API returns {fact: "..."}
    } catch (error) {
        factPara.innerText = "Oops! Couldn’t fetch a fact.";
        console.error("Error occurred:", error);
    }
};

btn.addEventListener("click", getFacts);
