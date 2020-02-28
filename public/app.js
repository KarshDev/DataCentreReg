const tableDb = [];
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
        console.log(res);
        const data = res.data
        //console.log(data)

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
                    </tr>
                `);
            });
        }
            else {
                console.log('Error')
            }
    })
}

// tableDb.push(tableData);
// console.log(tableDb);
// document.getElementById('result').innerHTML=null;

//      for (i = 0; i < tableDb.length; i ++){

//         document.getElementById('result').innerHTML += (`<tr>
//             <td>${i+1}</td>
//             <td>${tableDb[i].name}</td>
//             <td>${tableDb[i].email}</td>
//             <td>${tableDb[i].address}</td>
//             <td>${tableDb[i].description}</td>
//             <td>${tableDb[i].date}</td>
//             </tr>
//         `);
        
//       }

const saveBtn = document.querySelector("#send");
saveBtn.addEventListener("click",sendData);

getTableDb();