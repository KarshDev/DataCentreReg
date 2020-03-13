const tableDb = [];
let myDB = [];
function sendData() {
    const username = document.querySelector('#name').value;
    const regMail = document.querySelector('#email').value;
    const regAddr = document.querySelector('#address').value;
    const userDescription = document.querySelector('#description').value;
    const regDate = document.querySelector('#myDate').value;
    
    let tableData = {
        name: username,
        email: regMail,
        address: regAddr,
        description: userDescription,
        date: regDate
    };

    fetch('/newuser',{
        method: 'post',
        body: JSON.stringify(tableData),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    })
    .then(res=>{
        //console.log(res);
        //getTableDb()
        return res.json()

    }).then(res=>{
        console.log(res);
    });

}


function getTableDb() {
    fetch ('/getusers')
    .then (res => {
        console.log(res);
        return res.json();
    })
    .then (res => {
        //console.log(res);
        const data = res.data

        if (res != null){
            let counter = 1;
            data.forEach(item => {
                document.getElementById('result').innerHTML += (`<tr>
                    <td>${counter++}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
                    <td>${item.address}</td>
                    <td>${item.description}</td>
                    <td>${item.date}</td>
                    <td>
                        <button class='delete' id=${item._id} name=${item.name} value=${item.email}>Delete</button>
                        <button class='edit' id='${item._id}' name=${item.name} value=${item.email}>Edit</button>
                    </td>
                    </tr>
                `);
            });
        }
            else {
                console.log('Error')
            }
    })
}

const saveBtn = document.querySelector("#send");
saveBtn.addEventListener("click",sendData);
getTableDb();

// Search/Filter Function

function mySearch() {
    // Declare variables
    var input, filter, table, tr, td, i, j, txtValue;

    input = document.querySelector("#search");
    filter = input.value.toUpperCase();

    table = document.querySelector("#myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
        txtValue = td.textContent || td.innerText;
             if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
               } else {
                tr[i].style.display = "none";
                }
            }
      
        }
  }



    //First Task to store data into Array (Completed)
/* tableDb.push(tableData);
console.log(tableDb);
document.getElementById('result').innerHTML=null;

     for (i = 0; i < tableDb.length; i ++){

        document.getElementById('result').innerHTML += (`<tr>
            <td>${i+1}</td>
            <td>${tableDb[i].name}</td>
            <td>${tableDb[i].email}</td>
            <td>${tableDb[i].address}</td>
            <td>${tableDb[i].description}</td>
            <td>${tableDb[i].date}</td>
            </tr>
        `);
        
      }
*/

