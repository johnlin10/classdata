var button = document.getElementById("FastGo_button");
var GoTo = document.getElementById("GoTo");
var card = document.getElementById("card");
var cardafter = document.getElementById("cardafter");
var gohome = document.getElementById("GoHome");
var back = document.getElementById("back");

function cardhide() {
    FastGo_button.classList.remove("FastGo-hide");
    FastGo_button.classList.add("FastGo");
    cardafter.classList.remove("cardafter");
    card.classList.remove("open");
    gohome.classList.add("GoHome");
    gohome.classList.remove("GoHome-hide");
}

FastGo_button.addEventListener("click", function() {
    card.classList.add("open");
    cardafter.classList.add("cardafter");
    FastGo_button.classList.remove("FastGo");
    FastGo_button.classList.add("FastGo-hide");
    gohome.classList.remove("GoHome");
    gohome.classList.add("GoHome-hide");
    back.classList.add("last-hide-div");
    back.classList.remove("last-div");
});

cardafter.addEventListener("click", function () {
    FastGo_button.classList.remove("FastGo-hide");
    FastGo_button.classList.add("FastGo");
    cardafter.classList.remove("cardafter");
    card.classList.remove("open");
    gohome.classList.add("GoHome");
    gohome.classList.remove("GoHome-hide");
    back.classList.remove("last-hide-div");
    back.classList.add("last-div");
});

GoTo.addEventListener("click", function () {
    FastGo_button.classList.remove("FastGo-hide");
    FastGo_button.classList.add("FastGo");
    cardafter.classList.remove("cardafter");
    card.classList.remove("open");
});

