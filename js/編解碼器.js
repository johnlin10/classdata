var twotofour_input = document.getElementById("TwoToFour_input");
var answer = document.getElementById("Answer");

twotofour_input.addEventListener("keydown", function(event) {
  // 如果按下的是Enter鍵
  if (event.code === "Enter") {
    var output = "";
    // 將輸入轉換為十進制數字
    var decimal = (twotofour_input[0] << 1) + twotofour_input[1];
    // 將十進制數字轉換為四進制數字並賦值給輸出
    output = decimal.toString(4);
    document.getElementById("Answer").innerHTML = output;
  }
});

function binaryToQuaternary(input) {
    // 定義輸出變量
    var output = "";
    
    // 將輸入轉換為十進制數字
    var decimal = (input[0] << 1) + input[1];
    
    // 將十進制數字轉換為四進制數字並賦值給輸出
    output = decimal.toString(4);
    
    // 返回輸出
    return output;
  }

//模式切換
twotofour.addEventListener("click", function() {
  TwoToFour.classList.remove("display-none");
  ThreeToEight.classList.add("display-none");
  FourToSixteen.classList.add("display-none");
});
threetoeight.addEventListener("click", function() {
  TwoToFour.classList.add("display-none");
  ThreeToEight.classList.remove("display-none");
  FourToSixteen.classList.add("display-none");
});
fourtosixteen.addEventListener("click", function() {
  TwoToFour.classList.add("display-none");
  ThreeToEight.classList.add("display-none");
  FourToSixteen.classList.remove("display-none");
});
