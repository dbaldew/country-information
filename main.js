//event listener for search button click
const searchButton = document.getElementById("searchButton")
searchButton.addEventListener("click", getQuery);

//event listener for user input
const searchInput = document.getElementById("input")
searchInput.addEventListener("keyup", setQuery)

// function to get the query input
let query = "";

function setQuery(e) {

    query = e.target.value;
    if (e.keyCode === 13) {
        getQuery()
    }
}

//send query to server

async function getQuery() {

    searchInput.value = "";
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${query}`);
        console.log(query)
        console.log(response);

        const result = response.data[0];
        console.log(`${result.name.common} is situated in ${result.region}. It's capital is ${result.capital}.`);
        console.log(`${result.name.common} has a population of ${result.population}`);


    } catch (error) {
        console.error(error);
    }
}



