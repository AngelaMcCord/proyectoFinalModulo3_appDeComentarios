let input = document.getElementById("comment");
let addButton = document.getElementById("button2comment");
let commentList = document.getElementById("comment-list");

addButton.addEventListener("click", function(e){
    e.preventDefault();

    if (input.value.trim() !== "") {
        let commentBox = document.createElement("div"); // recuadro
        commentBox.classList.add("comment-card");
        
        commentBox.innerText = input.value; // el texto del comentario
        commentList.appendChild(commentBox);
        
        input.value = "";
    }
}
);
