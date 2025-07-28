// // Add new task
function newElement() {
  const input = document.getElementById("myInput");
  const inputValue = input.value.trim();

  if (inputValue === '') {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = inputValue;
  document.getElementById("myUL").appendChild(li);
  input.value = "";
}

// Click to mark task as done
document.getElementById("myUL").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

// Double-click to delete task
document.getElementById("myUL").addEventListener("dblclick", function (e) {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
