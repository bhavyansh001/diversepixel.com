console.log("Welcome to Calculator!");

let displayValue = document.getElementById("display");
{
  //Numbers
  document.getElementById("num0").addEventListener("click", function () {
    displayValue.value += document.getElementById("num0").innerText;
  });
  document.getElementById("num1").addEventListener("click", function () {
    displayValue.value += document.getElementById("num1").innerText;
  });
  document.getElementById("num2").addEventListener("click", function () {
    displayValue.value += document.getElementById("num2").innerText;
  });
  document.getElementById("num3").addEventListener("click", function () {
    displayValue.value += document.getElementById("num3").innerText;
  });
  document.getElementById("num4").addEventListener("click", function () {
    displayValue.value += document.getElementById("num4").innerText;
  });
  document.getElementById("num5").addEventListener("click", function () {
    displayValue.value += document.getElementById("num5").innerText;
  });
  document.getElementById("num6").addEventListener("click", function () {
    displayValue.value += document.getElementById("num6").innerText;
  });
  document.getElementById("num7").addEventListener("click", function () {
    displayValue.value += document.getElementById("num7").innerText;
  });
  document.getElementById("num8").addEventListener("click", function () {
    displayValue.value += document.getElementById("num8").innerText;
  });
  document.getElementById("num9").addEventListener("click", function () {
    displayValue.value += document.getElementById("num9").innerText;
  });
}

{
  //Operators
  document.getElementById("num.").addEventListener("click", function () {
    displayValue.value += document.getElementById("num.").innerText;
  });
  document.getElementById("opr+").addEventListener("click", function () {
    displayValue.value += document.getElementById("opr+").innerText;
  });
  document.getElementById("opr-").addEventListener("click", function () {
    displayValue.value += document.getElementById("opr-").innerText;
  });
  document.getElementById("oprx").addEventListener("click", function () {
    displayValue.value += "*";
  });
  document.getElementById("opr/").addEventListener("click", function () {
    displayValue.value += "/";
  });
}

//Clear
document.getElementById("clear").addEventListener("click", function () {
  displayValue.value = "";
});

// Clear screen on backspace
document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
    displayValue.value = "";
  }
});

// Add separate listener for Enter key on the document
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    document.getElementById("equalTo").click();
  }
});

// EqualTo
document.getElementById("equalTo").addEventListener("click", function () {
  try {
    let result = eval(displayValue.value);
    displayValue.value = result;
  } catch (error) {
    displayValue.value = "Error: Invalid expression";
  }
})