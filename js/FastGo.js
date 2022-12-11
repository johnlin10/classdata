var button = document.getElementById("button");
var card = document.getElementById("card");
var cardafter = document.getElementById("cardafter")
// var close = document.getElementById("close");

button.addEventListener("click", function() {
    card.classList.add("open");
    // close.classList.add("close-in")
    cardafter.classList.add("cardafter")
    button.classList.remove("FastGo")
    button.classList.add("FastGo-hide")
});

// close.addEventListener("click", function() {
//     card.classList.remove("open");
//     cardafter.classList.remove("cardafter")
//     close.classList.remove("close-in")
//     button.classList.add("FastGo")
//     button.classList.remove("FastGo-hide")
// });

cardafter.addEventListener("click", function() {
    button.classList.remove("FastGo-hide");
    button.classList.add("FastGo");
    cardafter.classList.remove("cardafter");
    card.classList.remove("open");
    close.classList.remove("close-in");
});

