"use strict";

// individual number JSON
// const response = await axios.get(`http://numbersapi.com/${number}?json`)

const MY_FAVORITE_NUMBER = 4;
const BASE_URL = 'http://numbersapi.com/'


async function postNumberFacts() {

    const response = await axios.get(`${BASE_URL}1,3,10`);

    for (let fact in response.data) {
        $('#multiple-number-facts').append(`<p>${response.data[fact]}</p>`);
    }

}


//try Promise.all(Settled)
// async function postFavNumberFacts() {

//     for (let i = 0; i < 4; i++) {
//         let response = await axios.get(`${BASE_URL}4?json`);
//         $('#favorite-number-facts').append(`<p>${response.data.text}</p>`);
//     }

// }

async function postFavNumberFacts() {

    let r1 = axios.get(`${BASE_URL}${MY_FAVORITE_NUMBER}?json`);
    let r2 = axios.get(`${BASE_URL}${MY_FAVORITE_NUMBER}?json`);
    let r3 = axios.get(`${BASE_URL}${MY_FAVORITE_NUMBER}?json`);
    let r4 = axios.get(`${BASE_URL}${MY_FAVORITE_NUMBER}?json`);
    
    let results = await Promise.allSettled([r1,r2,r3,r4]);
    console.log(results)

    for (let result of results) {
        $('#favorite-number-facts').append(`<p>${result.value.data.text}</p>`);
    }

}

postNumberFacts();
postFavNumberFacts();