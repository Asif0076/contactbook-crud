
// CRUD .. Create,Read,Update and Delete

// Golbal Variables
var row = null;

function Submit() {
    var dataEntered = retrieveData(); // retrieve data data after on click submit 
    var readData = readingDataFromLocalStorage(dataEntered);
    
    
    if(row == null) {
        insert(readData);
        message.innerHTML = "Data Inserted"
    }else{
        Update();
        message.innerHTML = "Data Updated"
    }

}
 
// CREATE
// retriving data from form
    function retrieveData() {
        var name1 = document.getElementById("name").value;
        var email1 = document.getElementById("email").value;
        var number1 =  document.getElementById("number").value;
    
        var arr = [name1,email1,number1];
        return arr;
    }

    // READ
    // data in local storage
    function readingDataFromLocalStorage (dataEntered){
        // Storing data in local storage
        var na = localStorage.setItem("name", dataEntered[0]);
        var em = localStorage.setItem("email", dataEntered[1]);
        var nu = localStorage.setItem("number", dataEntered[2]);
    
        // getting values from local to table
        var na1 = localStorage.getItem("name", na);
        var em1 = localStorage.getItem("email", em);
        var nu1 = localStorage.getItem("number", nu);

        var arr = [na1, em1, nu1];
        return arr;

    } 

    //INSERT
function insert(readData) {
    var row = table.insertRow();
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = `<button onClick = edit(this)>EDIT</button>
                                    <button onClick = remove(this)>DELETE</button>`;

     
    //both are same work  
    // var cell1= row.insertCell(0);
    // var cell2= row.insertCell(1);
    // var cell3= row.insertCell(2);

    // cell1.innerHTML = readData[0];
    // cell2.innerHTML = readData[1];
    // cell3.innerHTML = readData[2];    

}

//EDIT
function edit(td){
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("email").value = row.cells[1].innerHTML;
    document.getElementById("number").value = row.cells[2].innerHTML;
}

// UPDATE
function Update() {
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("email").value;
    row.cells[2].innerHTML = document.getElementById("number").value;
    row = null;
}

// DELETE
function remove(td) {
    var ans = confirm("Are you sure! you want to delete this record");
    if(ans == true){
        row =td.parentElement.parentElement;
    // document.getElementById("table").remove();
    document.getElementById("table").deleteRow(row.rowIndex);
    }
}