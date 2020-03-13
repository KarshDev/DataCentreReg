// Get the modal
const modal = document.querySelector(".modal-content");

// When the user clicks on the button, open the modal with selected id
const openModal = (id) =>{
    modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";

    }
  }

window.addEventListener('click', e=>{
    switch (e.target.className){

        case 'delete':
            document.getElementById('disclamer').innerHTML = `Delete User: ${e.target.name} with Email ${e.target.value}`
            openModal(e.target.id);
            
            function delUser(){
                fetch('/name/delete/' + e.target.id, {
                    method: 'DELETE',
                })
                .then(res => res.text())
                .then(text => document.querySelector('.modal-body').innerHTML = text);
            }
            const delBtn = document.querySelector("#del");
            delBtn.addEventListener("click",delUser);
            break;

        case 'edit':
            document.getElementById('disclamer').innerHTML = `Edit user with below details`;
            openModal(e.target.id);

            function editUser(){
                let data = {
                    name:name,
                    address: address,
                    description: description
                }
                fetch(`/edit/${ e.target.id}`, {
                    method: 'PUT',
                    body:data
                })
                .then(res => res.json())
                .then(res => {
                    getTableDb();
                    const data = res.data;
                    if (res != null){

                    }
                        else {
                            console.log('Error')
                        }
                })
            }
            const editBtn = document.querySelector("#edit");
            editBtn.addEventListener("click",editUser);
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
