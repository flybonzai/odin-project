import { ApiSearch } from "./apiSearch";

const apiKey = 'b1cfa7678d5b27b785625b582dac07bf';

const apiSearch = new ApiSearch(apiKey);
const searchBar = document.getElementById('search-bar');
const submitButton = document.getElementById('submit');
const resultViewport = document.getElementById('result-viewport');

const makeRequest = async (apiSearch, searchTerm, renderResponseFunc) => {
    try {
        const responseData = await apiSearch.search(searchTerm);
        renderResponseFunc(responseData);
    } catch (e) {
        console.log(`${e} occurred.`)
        renderResponseFunc({result: e});
    }
}

submitButton.onclick = () => {
    const searchTerm = searchBar.value;
    makeRequest(apiSearch, searchTerm, (responseData) => {
        resultViewport.innerText = JSON.stringify(responseData, null, 2);
    });
}
