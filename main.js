
//event listener for search button
document.getElementById("searchButton").addEventListener("click", queryInput);


// function to get the query input
function queryInput (){
    let input = document.getElementById("input").value;
    console.log(input)
}

//send query to server

async function getQuery() {
    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

getQuery().then();

