const out = document.querySelector(".out");
const mainInput = document.getElementById("main-input");
const submitButton = document.getElementById("main-btn");
var listElement = document.getElementsByClassName("element");
const correctionInput = document.getElementsByClassName("correctionInput");
let newBtn = document.getElementsByClassName("newBtn");
var myList = document.getElementById('myList');

// ДОБАВЛЕНИЕ ПУНКТА В СПИСОК
submitButton.onclick = function submitTask() {
  var node = document.createElement("div");
  var span = document.createElement("span");
  var deleted = document.createElement("button");
  var correction = document.createElement("button");
  span.innerHTML = mainInput.value;
  node.classList.add("element","w-100","mb-3","bg-warning","p-2","rounded");
  span.classList.add("w-100","p-3","span","rounded");
  deleted.innerHTML = "delete";
  correction.innerHTML = "corr";
  correction.classList.add('btn',"btn","btn-success","p-1","w-10","float-right")
  deleted.classList.add("btn","btn-danger","p-1","float-right","mb-2");
  node.appendChild(span);
  node.appendChild(deleted);
  node.appendChild(correction);
  document.getElementById("myList").appendChild(node);
  mainInput.value = "";
  deleted.onclick = removeFoo(node);
  span.addEventListener("click",checkTask(node,span)  );
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
    newBtn.classList.add("btn","btn-primary","p-1","w-25");
    newInput.classList.add("newInput","mb-3","input-group","rounded");
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
function checkTask(node, span){
  return function(){
    if(node.querySelector('.checkbox')){
      return;
    }
    var checkBox = document.createElement('input');
    checkBox.setAttribute("type", "checkbox");
    checkBox.checked=false;
    checkBox.classList.add('checkbox',"float-left");
    span.appendChild(checkBox);
    span.onclick=()=>{
      checkBox.classList.toggle('checked');
      if(checkBox.checked==false){

        span.style.textDecoration="line-through";
        checkBox.checked=true;
      }
      else{
        span.style.textDecoration="none";
        checkBox.checked=false;
      }
    }
    
}}
