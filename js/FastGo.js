var button = document.getElementById("button");
var card = document.getElementById("card");
var cardafter = document.getElementById("cardafter");

button.addEventListener("click", function() {
    card.classList.add("open")
    cardafter.classList.add("cardafter")
    button.classList.remove("FastGo")
    button.classList.add("FastGo-hide")
});

cardafter.addEventListener("click", function() {
    button.classList.remove("FastGo-hide");
    button.classList.add("FastGo");
    cardafter.classList.remove("cardafter");
    card.classList.remove("open");
});
