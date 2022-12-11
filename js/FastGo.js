var button = document.getElementById("button");
var card = document.getElementById("card");
var cardafter = document.getElementById("cardafter")
var close = document.getElementById("close");

button.addEventListener("click", function() {
    card.classList.add("open");
    cardafter.classList.add("cardafter")
    button.classList.remove("FastGo")
    button.classList.add("FastGo-hide")
});

close.addEventListener("click", function() {
    card.classList.remove("open");
    cardafter.classList.remove("cardafter")
    button.classList.add("FastGo")
    button.classList.remove("FastGo-hide")
});

