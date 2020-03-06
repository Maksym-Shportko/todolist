const out = document.querySelector(".out");
const mainInput = document.querySelector(".main-input");
const submitButton = document.querySelector(".submit-button");
var listElement = document.getElementsByClassName("element");
const correctionInput = document.getElementsByClassName("correctionInput");
let newBtn = document.getElementsByClassName("newBtn");

// ДОБАВЛЕНИЕ ПУНКТА В СПИСОК
submitButton.onclick = function submitTask() {
  var node = document.createElement("LI");
  var span = document.createElement("span");
  var deleted = document.createElement("button");
  var correction = document.createElement("button");
  span.innerHTML = mainInput.value;
  node.classList.add("element");
  deleted.innerHTML = "delete";
  correction.innerHTML = "corr";
  deleted.classList.add("del");
  node.appendChild(span);
  node.appendChild(deleted);
  node.appendChild(correction);
  document.getElementById("myList").appendChild(node);
  mainInput.value = "";
  deleted.onclick = myFoo(node);
  correction.onclick = anotherFoo(span, node);
};

//   удаление задачи
function myFoo(node) {
  return function() {
    var list = document.getElementById("myList");
    list.removeChild(node);
  };
};
// получение нового значения
function anotherFoo(span, node) {
  return function() {
    var newInput = document.createElement("input");
    var newBtn = document.createElement("button");
    newBtn.innerHTML = "change";
    newBtn.classList.add("change");
    newInput.classList.add("newInput");
    var newNode = document.createTextNode(listElement.value);
    newInput.value = span.innerHTML;
    newInput.appendChild(newNode);
    newInput.appendChild(newBtn);
    node.appendChild(newInput);
    node.appendChild(newBtn);
    newBtn.onclick = push(newInput, span, node);
    console.log(newInput.length)
  };
};
//замена старого значения на новое
function push(newInput, span) {
  return function(node) {
    span.innerHTML = newInput.value;
  };
};
