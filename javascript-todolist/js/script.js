let currentList = localStorage.getItem("todo")
  ? JSON.parse(localStorage.getItem("todo"))
  : [];
storedList();

function newElement() {
  //get the current value of the input field and store it in a variable
  var input = document.getElementById("task").value;
  if (input === "") {
    alert("Please enter a task");
  } else {
    currentList.push(input);
    localStorage.setItem("todo", JSON.stringify(currentList));
    storedList();
    //clear the input field
    document.getElementById("task").value = "";
  }
}

function storedList() {
  let newLi = [];
  if (currentList.length != 0) {
    currentList.forEach((element, index) => {
      newLi += `<li onClick="checkItem(${index})">${element}<button class="delete" onClick="deleteItem(${index})">x</button></li>`;
    });
  }
  document.getElementById("list").innerHTML = newLi;
}

function deleteItem(index) {
  currentList.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(currentList));
  storedList();
}

//when clicked, add a class called checked to the li and remove the class if it gets clicked again
function checkItem(index) {
  let list = document.getElementById("list");
  let listItems = list.getElementsByTagName("li");
  listItems[index].classList.toggle("checked");
  console.log(listItems);
  console.log(currentList);
}
