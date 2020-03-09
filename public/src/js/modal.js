// Get the modal
var modal = document.querySelector(".modal-content");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

const openModal = (id) =>{
    modal.style.display = "block";
}

window.addEventListener('click', e=>{
    switch (e.target.className){
        case 'delete':
            openModal(e.target.id);
            fetch
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
// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}