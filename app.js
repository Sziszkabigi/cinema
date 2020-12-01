import { movieList, seatsDetails } from "./db.js";

const movieSelected = document.getElementById("movie");
const seatsContainer = document.querySelector(".cinema-container .seats");
const resetButton = document.querySelector(".price-reset-container .reset");
const counter = document.getElementById("counter");
const price = document.getElementById("price");

let ticketPrice = null;
let allSeats = null;

function updateCounterAndPrice() {
    const selectedSeats = document.querySelectorAll(
        ".seats .available-seat.selected"
    );

    counter.innerText = selectedSeats.length;
    price.innerText = selectedSeats.length * ticketPrice;
}
