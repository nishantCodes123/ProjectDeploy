const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");


function showNote() {
  if (localStorage.getItem("notes")) {
    notesContainer.innerHTML = localStorage.getItem("notes");
  }
}
showNote();


function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}


createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./notes-app-img/images/delete.png";

  
  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  
  updateStorage();
});

notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    
    e.target.parentElement.remove();
    updateStorage();
  }
});


notesContainer.addEventListener("input", function (e) {
  if (e.target.classList.contains("input-box")) {
    updateStorage();
  }
});
notesContainer.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

document.addEventListener("DOMContentLoaded", () => {
  const alertOverlay = document.getElementById("alertOverlay");
  const alertOkButton = document.getElementById("alertOkButton");
  const hasVisited = localStorage.getItem("hasVisited");

  if (!hasVisited) {
    alertOverlay.classList.remove("hidden");
  }
  alertOkButton.addEventListener("click", () => {
    alertOverlay.classList.add("hidden");
    localStorage.setItem("hasVisited", "true");
  });
});