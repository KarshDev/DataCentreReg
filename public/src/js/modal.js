// Get the modal
const modal = document.querySelector(".modal-content");

// When the user clicks on the button, open the modal with selected id
const openModal = (id) =>{
    modal.style.display = "block";
}

window.addEventListener('click', e=>{
    switch (e.target.className){
        case 'delete':
            document.getElementById('disclamer').innerHTML = `Delete User: ${e.target.name} with email ${e.target.value}`
            openModal(e.target.id);
            
            function delUser(){
                fetch('/name/delete/' + e.target.id, {
                    method: 'DELETE',
                })
                .then(res => res.text())
                .then(text => console.log(text));
            }
            const delBtn = document.querySelector("#del");
            delBtn.addEventListener("click",delUser);

            break;

        case 'edit':
            openModal(e.target.id);
            break;

        case 'close':
            modal.style.display = "none";
            break;

        case 'reject':
            modal.style.display = "none";
            break;
        default:
    }
})
