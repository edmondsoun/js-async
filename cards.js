"use strict";

const BASE_URL = "http://deckofcardsapi.com/api/deck";

let deckId = "";

// single request, console log value

//newly shuffled deck - http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1

//draw a card - http://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=1

async function shuffleCard(){
  let deckResp = await axios.get(`${BASE_URL}/new/shuffle/?deck_counts=1`);
  deckId = deckResp.data.deck_id;
}

async function drawCard(){
  let cardResp = await axios.get(`${BASE_URL}/${deckId}/draw`);
  console.log("suit:", cardResp.data.cards[0].suit, "value:", cardResp.data.cards[0].value);
  return cardResp;
}

async function showCard(){
  try{
    let cardResp = await drawCard();
    let pulledCard = cardResp.data.cards[0].image;

    $("#card-pile").append(`<img src="${pulledCard}">`);
  } catch(err){
    alert("No more cards left!");
  }
}

$("button").on("click", showCard);
shuffleCard();