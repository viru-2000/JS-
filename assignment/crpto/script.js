'use strict';

const baseUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr";

const searchInput = document.querySelector("#search");

$(document).ready(function() {
    $("#fetch-data").click(function() {
        // alert("Fetching...");

        const searchText = searchInput.value.trim().toLowerCase();

        if (searchText) {

            const url = `${baseUrl}&ids=${searchText}`;

            $.getJSON(url, function(data) {
                console.log(data);

                if (data && data.length > 0) {

                    document.querySelector("#name").innerHTML = `Coin ID: ${data[0].id}`;
                    document.querySelector("#price").innerHTML = `Price: ₹${data[0].current_price}`;
                    document.querySelector("#img").src = data[0].image;
                    document.querySelector("#market-rank").innerHTML = `Market Rank: #${data[0].market_cap_rank}`;
                }
            })
        } else {
            alert("Please enter a coin name to search.");
        }

    });
    $("#refresh").click(function() {
        searchInput.value = "";
        document.querySelector("#name").innerHTML = `Coin ID: ${data[0].id}`;
        document.querySelector("#price").innerHTML = `Price: ₹${data[0].current_price}`;
        document.querySelector("#img").src = data[0].image;
    });
});