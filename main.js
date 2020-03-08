const out = document.querySelector(".out");
const mainInput = document.querySelector(".main-input");
const submitButton = document.querySelector(".submit-button");
var listElement = document.getElementsByClassName("element");
const correctionInput = document.getElementsByClassName("correctionInput");
let newBtn = document.getElementsByClassName("newBtn");
var myList = document.getElementById('myList');
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
  deleted.onclick = removeFoo(node);

  correction.onclick = correctionFoo(span, node,);
};

//   удаление задачи
function removeFoo(node) {
  return function() {
    var list = document.getElementById("myList");
    list.removeChild(node);
  };
};
// получение нового значения
function correctionFoo(span, node) {
  return function() {
    if(node.querySelector('.newInput')){
      return;
    }
    var newInput = document.createElement("input");
    var newBtn = document.createElement("button");
    newBtn.innerHTML = "change";
    newBtn.classList.add("change");
    newInput.classList.add("newInput");
    newInput.value = span.innerHTML;
    node.appendChild(newInput);
    node.appendChild(newBtn);
    newBtn.onclick = pushValue(newInput, span, node, newBtn);

  };
};
//замена старого значения на новое
function pushValue(newInput, span, newBtn,node) {
  return function() {
    span.innerHTML = newInput.value;
    newInput.remove();
    node.remove();
    
  };
};
