//get the unordered list that has the id of "list" and store all of the list items in a variable
var list = document.getElementById("list").getElementsByTagName("li");
console.log(list);
let currentList = [];
for (let i = 0; i <= list.length - 1; i++) {
  currentList.push(list[i].innerHTML);
}
console.log(currentList);

function newElement() {
  //get the current value of the input field and store it in a variable
  var input = document.getElementById("task").value;
  if (input === "") {
    alert("Please enter a task");
  } else {
    //create a new li element
    var li = document.createElement("li");
    //add the value of the input variable to the li element
    li.innerHTML = input;
    //add the li element to the list
    document.getElementById("list").appendChild(li);
    //add the input value to the array
    currentList.push(input);
    console.log(currentList);
    //clear the input field
    document.getElementById("input").value = "";
  }
}
