let input = document.getElementById("comment");
let addButton = document.getElementById("button2comment");
let commentList = document.getElementById("comment-list");

addButton.addEventListener("click", function(e){
    e.preventDefault();

    if (input.value.trim() !== "") {

        let commentItem = `<div class="comment-card">
                                <img class="user-photo" src="https://cdn-icons-png.flaticon.com/512/706/706807.png" alt="userphoto">
                                ${input.value}
                                <button class="btn-trash" ><i class="fas fa-trash"></i></button>
                            </div>`; //template del nuevo comentario
        
        let commentListHtml = commentList.innerHTML;//obtener los comentarios anteriores
        commentListHtml = commentListHtml.concat(commentItem); // agregar el nuevo comentario
        commentList.innerHTML = commentListHtml; //sobreescribir la lista de comentarios actualizada
        
        input.value = "";
    }
}
);

