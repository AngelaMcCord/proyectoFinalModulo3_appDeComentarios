let input = document.getElementById("comment");
let addButton = document.getElementById("button2comment");
let commentList = document.getElementById("comment-list");

addButton.addEventListener("click", function(e){
    e.preventDefault();

    if (input.value.trim() !== "") {
        const now = new Date();
        const datetime = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        let commentItem = `<div class="comment-card">
                                <div class="comment-section">
                                    <img class="user-photo" src="https://cdn-icons-png.flaticon.com/512/706/706807.png" alt="userphoto">
                                    ${input.value}
                                    <button class="btn-trash" ><i class="fas fa-trash"></i></button>
                                </div>
                                <div class="comment-datetime">
                                    <i class="far fa-clock"></i> <p>${datetime}</p>
                                </div>
                            </div>`; //template del nuevo comentario con la fecha y hora
        
        let commentListHtml = commentList.innerHTML;//obtener los comentarios anteriores
        commentListHtml = commentListHtml.concat(commentItem); // agregar el nuevo comentario
        commentList.innerHTML = commentListHtml; //sobreescribir la lista de comentarios actualizada

            let deleteButtons = document.querySelectorAll(".btn-trash");
            deleteButtons.forEach(element => {

                element.addEventListener("click", function(e){
                    if (e.target.parentElement.parentElement.parentElement.id !== "comment-list") {
                        e.target.parentElement.parentElement.parentElement.remove();
                    }                    
                    
                });
            });

        input.value = "";

    }
}
);

input.addEventListener("keypress", function(e){
    console.log(e.code);
    
    if (e.code === "Enter") {
        e.preventDefault();

    if (input.value.trim() !== "") {
        const now = new Date();
        const datetime = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
        let commentItem = `<div class="comment-card">
                                <div class="comment-section">
                                    <img class="user-photo" src="https://cdn-icons-png.flaticon.com/512/706/706807.png" alt="userphoto">
                                    ${input.value}
                                    <button class="btn-trash" ><i class="fas fa-trash"></i></button>
                                </div>
                                <div class="comment-datetime">
                                    <i class="far fa-clock"></i> <p>${datetime}</p>
                                </div>
                            </div>`; //template del nuevo comentario con la fecha y hora
        
        let commentListHtml = commentList.innerHTML;//obtener los comentarios anteriores
        commentListHtml = commentListHtml.concat(commentItem); // agregar el nuevo comentario
        commentList.innerHTML = commentListHtml; //sobreescribir la lista de comentarios actualizada

            let deleteButtons = document.querySelectorAll(".btn-trash");
            deleteButtons.forEach(element => {

                element.addEventListener("click", function(e){
                    if (e.target.parentElement.parentElement.parentElement.id !== "comment-list") {
                        e.target.parentElement.parentElement.parentElement.remove();
                    }                    
                    
                });
            });

        input.value = "";

    }
    }
    
}
);